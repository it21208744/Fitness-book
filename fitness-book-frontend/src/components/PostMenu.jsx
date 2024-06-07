import React from 'react'
import axios from 'axios'
import { Button, Dropdown, Flex } from 'antd'
const onMenuClick = (e) => {
  console.log('click', e)
}

const deletePost = async ({ id }) => {
  try {
    // console.log(id)
    await axios.delete(`/api/v1/mealplans/${id}`)
    console.log(`deleted`)
  } catch (error) {
    console.log(error)
  }
}
const items = [
  {
    key: '1',
    label: 'Share',
  },
  {
    key: '2',
    label: 'Delete',
  },
  {
    key: '3',
    label: 'Update',
  },
]

const PostMenu = (id) => {
  return (
    <Flex align="flex-start" gap="small" vertical>
      <Dropdown.Button
        menu={{
          items,
          onClick: () => {
            deletePost(id)
          },
        }}
      ></Dropdown.Button>
    </Flex>
  )
}
export default PostMenu

//===================

// const App = ({ id }) => (

// )
// export default App
