import React, {useEffect, useState} from "react";
import { useSelector, useDispatch} from "react-redux";
import {getUsers} from "../actions/usersActions";
import {clearUserPosts, getUserPosts} from "../actions/userPostsAction";
import { default as chevron_up } from '../assets/chevron_up.svg'
import { default as chevron_down } from '../assets/chevron_down.svg'
import {Link} from "react-router-dom";

export function UsersList(){
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users.users)
    let userPosts = useSelector((state) => state.userPosts.userPosts)
    const [selectedUserId, setSelectedUserId] = useState(0)
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])
    const requestForUserPost = userId => event => {
        setSelectedUserId(userId);
        dispatch(getUserPosts(userId))
    }
    return (
        <div className="container mx-auto">
                <table className="table-auto w-full border">
                    <caption>Users</caption>
                    <thead className="bg-blue-200">
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th>Company</th>
                            <th>Posts</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users && users.map((user) =>(
                        <React.Fragment key={user.id}>
                            <tr className="border hover:bg-gray-50">
                                <td className="table-cell" >{user.name}</td>
                                <td className="table-cell" >{user.username}</td>
                                <td className="table-cell" >{user.email}</td>
                                <td className="table-cell">
                                    <table>
                                        <tbody>
                                        <tr>
                                            <th className="table-cell">street</th>
                                            <td >{user.address.street}</td>
                                        </tr>
                                        <tr >
                                            <th className="table-cell">city</th>
                                            <td>{user.address.city}</td>
                                        </tr>
                                        <tr>
                                            <th className="table-cell">suite</th>
                                            <td>{user.address.suite}</td>
                                        </tr>
                                        <tr >
                                            <th className="table-cell">zipcode</th>
                                            <td>{user.address.zipcode}</td>
                                        </tr>
                                        <tr>
                                            <th className="table-cell">geo</th>
                                            <td>
                                                <table>
                                                    <tbody>
                                                    <tr>
                                                        <th className="table-cell" >lat</th>
                                                        <td>{user.address.geo.lat}</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="table-cell">lng</th>
                                                        <td>{user.address.geo.lng}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td className="table-cell">{user.phone}</td>
                                <td className="table-cell">{user.website}</td>
                                <td className="table-cell">
                                    <table>
                                        <tbody>
                                        <tr>
                                            <th className="table-cell">name</th>
                                            <td>{user.company.name}</td>
                                        </tr>
                                        <tr>
                                            <th className="table-cell" >catchPhrase</th>
                                            <td>{user.company.catchPhrase}</td>
                                        </tr>
                                        <tr>
                                            <th className="table-cell">bs</th>
                                            <td>{user.company.bs}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td><button className="border" onClick={requestForUserPost(user.id)}><img src={chevron_down} alt={'show posts'}/></button>
                                    <button className="border" onClick={() => dispatch(clearUserPosts())}><img src={chevron_up} alt={'show posts'}/></button>
                                </td>
                            </tr>
                            {
                                user.id === selectedUserId && <tr >
                                    <td colSpan={8}>
                                        { userPosts && <table className="table-fixed w-full">
                                                <tbody>
                                                {userPosts && userPosts.map((post) => (
                                                    <tr key={post.id} className="border">
                                                        <td colSpan={3} className="hover:text-gray-500">
                                                            <Link to={`/post/${post.id}`}>
                                                                {post.title}
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        }
                                    </td>
                                </tr>
                            }
                        </React.Fragment>
                        ))}
                    </tbody>
                </table>
        </div>
    )
}
