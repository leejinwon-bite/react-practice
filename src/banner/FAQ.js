import '../App.css';

function FAQ() {
    return (
        <section id="faq">
            <h2>자주하는 질문과 답변</h2>
            <ul className='accordion'>
                <li>
                    <input type='radio' name='accordion' id='first'></input>
                    <label for='first'>주문은 어떻게 하나요?</label>
                    <div className='content'>
                        <p>스위커 온라인몰에서 주문하셔도 되고, 000-
                            0000-0000으로 전화해서 궁금한 것들을 확인한
                            후 주문하셔도 됩니다.
                        </p>
                    </div>
                </li>
                <li>
                    <input type='radio' name='accordion' id='second'></input>
                    <label for='second'>주문 용량은 어떻게 되나요?</label>
                    <div className='content'>
                        <p>고객님의 취향에 맞는 커피를 매주 또는 격주로 배송합니다.
                            주문 용량은 원두별로 100g씩, 200g씩 필요한 양을 주문
                            하시면 됩니다.
                        </p>
                        <p>같은 종류의 커피로 200g을 주문할 수도 있고,
                            다른 종류의 커피로 100g씩 2개를 주문하셔도 됩니다.
                        </p>
                        <p>홈카페를 위한 100g, 200g 포장과 오피스카페를 위한
                            500g, 1kg 포장이 있습니다.
                        </p>
                    </div>
                </li>
                <li>
                    <input type='radio' name='accordion' id='third'></input>
                    <label for='third'>언제 배송되나요?</label>
                    <div className='content'>
                        <p>매주 목요일에 배송 출발합니다. 제주도내는 금요일에
                            받으실 수 있고 도외는 토요일에 받으실 수 있습니다.
                        </p>
                        <p>단, 목요일 공휴일이거나 택배 물량이 몰리는 시즌일 경우
                            하루 이틀 조정될 수 있습니다.
                        </p>
                    </div>
                </li>
            </ul>
        </section>

    );
}

export default FAQ;