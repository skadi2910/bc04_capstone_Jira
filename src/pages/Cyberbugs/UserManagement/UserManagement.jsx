import React, { useEffect } from 'react'
import { Space, Table, Tag } from 'antd';
import Search from '../../../components/Cyberbugs/Search/Search';
import TableComponent from './TableComponent';
import { useDispatch } from 'react-redux';
import { selectedKeyAction } from '../../../redux/actions/SelectKeyAction';
import SidebarCyberbugs from '../../../components/Cyberbugs/SidebarCyberbugs';


export default function UserManagement() {
    const dispatch = useDispatch();
    const key = 4;
    useEffect(() => {
        dispatch(selectedKeyAction(key)); //! chinh key cho sidebar
    }, [])
    return (
        <div className='container'>
            <div className="px-4">
                <button className="button-29 mx-4 my-8" role="button">Tạo người dùng</button>
                <Search />
                <TableComponent />
            </div>
        </div>

    )
}
