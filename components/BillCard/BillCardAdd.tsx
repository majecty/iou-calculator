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
                        <div className="columns is-mobile">
                            <input type="text"
                                placeholder="희우"
                                className="input column"
                            />
                            <span className="column is-narrow">
                                가
                            </span>
                        </div>
                        <div className="columns is-mobile">
                            <input type="number"
                                placeholder="3000"
                                className="input column"
                            />
                            <span className="column is-narrow">
                                원을
                            </span>
                        </div>
                    </div>
                </div>
                <footer className="card-footer">
                    <a href="#" className="card-footer-item">결제한 영수증 추가</a>
                </footer>
            </div>
        );
    }
}
