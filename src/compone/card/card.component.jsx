import React, { useState } from 'react';
import { EditOutlined, GoogleOutlined, ChromeOutlined, DeleteFilled, PhoneOutlined, HeartTwoTone, HeartFilled } from '@ant-design/icons';
import { Card } from 'antd';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import './card.style.css';
import { deleteUser } from '../../redux/user/user.action';


const UserCard = ({ user, deleteUser }) => {
    const [ state, setState ] = useState ({
        url: `https://avatars.dicebear.com/v2/avataaars/{{${user.username}}}.svg?options[mood][]=happy`,
        like: false,
        userData: user,
        id: user.id,
        name: user.name,
        email: user.email,
        website: user.website,
        phone: user.phone,
        isModal: false,
    })

    const handleClick = () => {
        setState({ ...state, like: !state.like })
    }

    const handleOk = () => {
        setState({ ...state, isModal: false })
    }


    return (
        <div>
            <Card bordered={true}
            cover={<div className='card-img'><img src={state.url} alt='avatar' /></div>}
            actions={[
                <>
                    {
                        state.like 
                        ? 
                        <HeartFilled onClick={handleClick} className='icon' style={{color: "#ff0000"}}/>
                        :
                        <HeartTwoTone onClick={handleClick} className="icon" twoToneColor="#ff0000" />
                    }
                </>,
                <EditOutlined className="icon" onClick={() => setState({...state, isModal: true })}/>,
                <DeleteFilled className="icon" onClick={() => deleteUser(user.id)}/>,
              ]}
            >

                <h3>{state.name}</h3>
                <div className='user-address'>
                    <div className='address-detail'>
                        <GoogleOutlined className='icon'/>
                        <p>{state.email}</p>
                    </div>
                    <div className='address-detail'>
                        <PhoneOutlined className='icon'/>
                        <p>{state.phone}</p>
                    </div>
                    <div className='address-detail'>
                        <ChromeOutlined className='icon'/>
                        <p>http://{state.website}</p>
                    </div> 
                </div>
            </Card>
            <Modal title="Basic Modal" visible={state.isModal} onOk={handleOk} onCancel={() => {setState({ ...state, isModal: false })}}>
                <form className='form'>
                    <div className='form-box'>
                        <label>Name:</label>
                        <input className='input-field'
                            value={state.name}
                            onChange={(e) => setState({ ...state, name: e.target.value })}
                            required
                            autoComplete='off'
                        />
                    </div>

                    <div className='form-box'>
                        <label>Email:</label>
                        <input className='input-field'
                            value={state.email}
                            onChange={(e) => setState({ ...state, email: e.target.value })}
                            required
                            autoComplete='off'
                        />
                    </div>

                    <div className='form-box'>
                        <label>Phone:</label>
                        <input className='input-field'
                            value={state.phone}
                            onChange={(e) => setState({ ...state, phone: e.target.value })}
                            required
                            autoComplete='off'
                        />
                    </div>

                    <div className='form-box'>
                        <label>Website:</label>
                        <input className='input-field'
                            value={state.website}
                            onChange={(e) => setState({ ...state, website: e.target.value })}
                            required
                            autoComplete='off'
                        />
                    </div>
                </form>
            </Modal>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    deleteUser: userId => dispatch(deleteUser(userId))    
});

export default connect(null, mapDispatchToProps)(UserCard);