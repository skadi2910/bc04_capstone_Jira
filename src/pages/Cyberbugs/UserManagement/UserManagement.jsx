import React, { useEffect } from 'react'
import { Space, Table, Tag } from 'antd';
import Search from '../../../components/Cyberbugs/Search/Search';
import TableComponent from './TableComponent';
import { useDispatch, useSelector } from 'react-redux';
import { selectedKeyAction } from '../../../redux/actions/SelectKeyAction';
import SidebarCyberbugs from '../../../components/Cyberbugs/SidebarCyberbugs';
import { getUserListAction } from '../../../redux/actions/UserAction';
import { openModalAction } from '../../../redux/actions/ModalAction';
import Signup from '../../User/Signup/Signup';
import { useNavigate } from 'react-router-dom';


export default function UserManagement() {
    const dispatch = useDispatch();
    const key = 4;
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(selectedKeyAction(key)); //! chinh key cho sidebar
    }, []);
    const handleAddUser = () => {
        // dispatch(openModalAction(<Signup />));
        navigate("/usermanagement/createuser");
    }
    return (
        <div className='w-full flex justify-center'>
            <div className="container">
                <div className="px-4">
                    <button
                        onClick={handleAddUser}
                        className="button-29 mx-4 my-8" role="button">Tạo người dùng</button>
                    <Search />
                    <TableComponent />
                </div>
            </div>

        </div>

    )
}
