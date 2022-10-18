import React from 'react'
import UpdatingAnimation from './UpdatingAnimation'

export default function Updating() {
    return (
        <div className='container'>
            <UpdatingAnimation />
            <p className='mx-auto px-10'>Hiện tại phiên bản này chưa hỗ trợ trên mobile, bạn hãy đăng nhập bằng máy tính hoặc tablet để sử dụng nhé</p>
        </div>
    )
}
