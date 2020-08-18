import React, { useState, } from 'react';
import {useHistory } from 'react-router-dom';
import { MDBBtn} from 'mdbreact';
import queryString from 'query-string';


const Payment = () => {

  const history = useHistory();

    const onClickPayment = () => {
        const { IMP } = window;
        IMP.init('imp75154757');
    
        const data = {
            pg: 'html5_inicis',
            pay_method: 'card',
            merchant_uid: `mid_${new Date().getTime()}`,
            name : '병원예약', //주문명
            amount: '5000', // 가격
            buyer_name : '홍길동', // 구매자 이름
            buyer_tel: '010-1234-5678', // 구매자 번호
            buyer_email: 'lim_1994@naver.com' // 구매자 이메일
        }
    
        IMP.request_pay(data, callback);
    }

    function callback(response) {
        const query = queryString.stringify(response);
        history.push(`/payment/result?${query}`);
      }

      return (
        <>
            <MDBBtn gradient="purple" size="lg" onClick={() => onClickPayment()}>결제하기</MDBBtn>
        </>
    );

}

export default Payment