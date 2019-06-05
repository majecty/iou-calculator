import React, { Component } from 'react'

export default class BillCardAdd extends Component {
    public render() {
        return (
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        새 영수증
                    </p>
                </header>
                <div className="card-content">
                    <div className="content">
                        <input type="text"
                            placeholder="희우"
                            className="input"
                        />
                        가
                        <input type="number"
                            placeholder="3000"
                            className="input"
                        />
                        원을
                    </div>
                </div>
                <footer className="card-footer">
                    <a href="#" className="card-footer-item">결제한 영수증 추가</a>
                </footer>
            </div>
        );
    }
}
