import { Avatar, List } from 'antd';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

// const data = [
//   {
//     title: 'Ant Design Title 1',
//   },
//   {
//     title: 'Ant Design Title 2',
//   },
//   {
//     title: 'Ant Design Title 3',
//   },
//   {
//     title: 'Ant Design Title 4',
//   },
// ];

const ViewMembers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/user/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // const ViewMembers= () => (
  //   <List
  //     itemLayout="horizontal"
  //     dataSource={data}
  //     renderItem={(item, index) => (
  //       <List.Item>
  //         <List.Item.Meta
  //           avatar={
  //             <Avatar
  //               src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
  //             />
  //           }
  //           title={<a>{item.title}</a>}
  //           description="Ant Design, a design language for background applications, is refined by Ant UED Team"
  //         />
  //       </List.Item>
  //     )}
  //   />
  // );

  const getWeightGoal = (targetCalories) => {
    let goal;

    switch (true) {
      case targetCalories === 1800:
        goal = 'lose weight';
        break;
      case targetCalories === 2500:
        goal = 'maintain weight';
        break;
      case targetCalories === 2800:
        goal = 'gain muscle';
        break;
      case targetCalories === 1400:
        goal = 'lose weight';
        break;
      case targetCalories === 2000:
        goal = 'maintain weight';
        break;
      case targetCalories === 2300:
        goal = 'gain muscle';
        break;
      default:
        goal = 'unknown goal';
    }
    return goal;
  };

  return (
    <List
      itemLayout="horizontal"
      dataSource={users}
      renderItem={(user) => (
        <List.Item>
          <List.Item.Meta
            title={user.name}
            description={
              <div>
                User ID: {user.userId} <br />
                Birth Date: {user.birthDate} <br />
                Email: {user.emailAddress} <br />
                Gender: {user.gender} <br />
                Weight Goal: {getWeightGoal(user.targetCalories)}
              </div>
            }
          />
        </List.Item>
      )}
    />
  );
};


export default ViewMembers;
