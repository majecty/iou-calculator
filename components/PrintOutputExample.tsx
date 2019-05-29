import React, { Component } from 'react'

export default class PrintOutputExample extends Component {
    render() {
        return (
            <div className="box">
                <h2 className="subtitle">예시 출력</h2>
                <p>
                    총 금액은 3000원 입니다. 총 인원은 2명 입니다. 각자 낼 금액은 1500원 입니다.
                </p>
                <ul>
                    <li>회우가 3000원을 결제했습니다.</li>
                    <li>회우가 4000원을 결제했습니다.</li>
                    <li>하나가 0원을 결제했습니다.</li>

                </ul>
                <ul>
                    <li>하나는 회우에게 3500원을 송금해 주세요.</li>
                </ul>
            </div>
        )
    }
}

