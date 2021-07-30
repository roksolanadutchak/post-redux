import React, {useEffect, useState} from "react";
import { useSelector, useDispatch} from "react-redux";
import {getUsers} from "../actions/usersActions";
import {getUserPosts} from "../actions/userPostsAction";
import { default as chevron_up } from '../assets/chevron_up.svg'
import { default as chevron_down } from '../assets/chevron_down.svg'
import {default as pencil} from "../assets/pencil.svg";
import {Link} from "react-router-dom";

export function UsersList(){
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users.users)
    const userPosts = useSelector((state) => state.userPosts.userPosts)
    const [selectedUserId, setSelectedUserId] = useState(0)
    console.log(userPosts)
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    const requestForUserPost = userId => event => {
        setSelectedUserId(userId);
        dispatch(getUserPosts(userId))
    }
    return (
        <div>
                <table className="table-fixed w-full border">
                    <thead className="bg-blue-200">
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>email</th>
                            <th>address</th>
                            <th>phone</th>
                            <th>website</th>
                            <th>company</th>
                            <th>posts</th>
                        </tr>
                    </thead>
                    {users && users.map((user) =>(
                    <tbody>
                        <React.Fragment key={user.id}>
                            <tr className="border">
                                <td className="table-cell">{user.name}</td>
                                <td className="table-cell" >{user.username}</td>
                                <td className="table-cell">{user.email}</td>
                                <td className="table-cell">
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
                                        <tr>
                                            <th className="table-cell" >lat</th>
                                            <td>{user.address.geo.lat}</td>
                                        </tr>
                                        <tr>
                                            <th className="table-cell">lng</th>
                                            <td>{user.address.geo.lng}</td>
                                        </tr>
                                    </tr>
                                </td>
                                <td className="table-cell">{user.phone}</td>
                                <td className="table-cell">{user.website}</td>
                                <td className="table-cell">
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
                                </td>
                                <td><button onClick={requestForUserPost(user.id)}><img src={chevron_down} alt={'show posts'}/></button></td>
                            </tr>
                            {
                                user.id === selectedUserId && <tr>
                                    {userPosts && userPosts.map((post) => (
                                        <tr key={post.id}>
                                            <td>
                                                <Link to={`/post/${post.id}`}>
                                                    {post.title}
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tr>
                            }

                        </React.Fragment>
                    </tbody>
                        ))}
                </table>
        </div>
    )
}
