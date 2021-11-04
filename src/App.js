import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers } from './redux/user/user.action';
import { Row, Col } from 'antd';
import Spinner from './compone/spinner/spinner.component';
import 'antd/dist/antd.css';
import './App.css';
import UserCard from './compone/card/card.component';

const App = ({ users, loading, error, getUsers }) => {
  
  useEffect(() => {
      getUsers()
  }, [getUsers])
   
  return (
    <div className='site-card-wrapper'>
      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
        { loading ? <Spinner /> : null }
        { 
          users 
          ? 
          users.map((user) => {
            return (
              <Col xs={24} md={12} xl={6} key={user.id}>
                <UserCard user={user} />
              </Col>
            );
          })
          :
          null
        }
      </Row>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
    loading: state.user.loading,
    error: state.user.error
  }
};

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
