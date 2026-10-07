import { useState } from 'react';
import './mainPages.css';

// Danh sách sản phẩm tạm thời
const products = [
    { id: 'SP001', name: 'Bàn phím cơ không dây', quantity: 25 },
    { id: 'SP002', name: 'Chuột công thái học', quantity: 12 },
    { id: 'SP101', name: 'Màn hình 27 inch 4K', quantity: 8 },
    { id: 'SP102', name: 'Tai nghe chống ồn', quantity: 0 },
    { id: 'SP201', name: 'Hub Type-C 8 in 1', quantity: 45 },
]

export default function Main() {
    const [searchCode, setSearchCode] = useState('');
    const [searchName, setSearchName] = useState('');

    // Hàm lọc sản phẩm
    const filteredProduct = products.filter((item) => {
        const matchCode = item.id.toLowerCase().includes(searchCode.trim().toLowerCase());
        const matchName = item.name.toLowerCase().includes(searchName.trim().toLowerCase());
        return matchCode & matchName;
    })

    return (
        <div className="container">
            {/* Khu vực tiêu đề đầu trang */}
            <div className="banner">
                <div className="content">
                    <div className="logo">
                        Welcome back!
                    </div>
                    <div className="text">
                        Trần Lê Huy
                    </div>
                </div>
            </div>

            <h1>Danh mục các sản phẩm</h1>
            {/* Khu vực tìm kiếm sản phẩm */}
            <div className="filter">
                {/* Tìm theo mã */}
                <div className="filter-element">
                    <label>Mã sản phẩm</label>
                    <input 
                        type="text"
                        placeholder="Nhập mã sản phẩm..."
                        value={searchCode}
                        onChange={(e) => setSearchCode(e.target.value)}
                    />
                </div>

                {/* Tìm theo tên */}
                <div className="filter-element">
                    <label>Tên sản phẩm</label>
                    <input
                        type="text"
                        placeholder="Nhập tên sản phẩm..."
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                    />
                </div>
            </div>

            {/* Khu vực hiển thị danh sách các sản phẩm */}
            <table>
                <thead>
                    <tr>
                        <th style={{width: '20%'}}>Mã sản phẩm</th>
                        <th style={{width: '60%'}}>Tên sản phẩm</th>
                        <th>Số lượng tồn</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProduct.map((item, index) => (
                        <tr 
                            key={item.id}
                            className={index % 2 === 0 ? "even-row" : "odd-row"}
                        >
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td className={item.quantity === 0 ? "out-of-stock" : ""}>
                                {item.quantity === 0 ? "Hết hàng" : item.quantity}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}