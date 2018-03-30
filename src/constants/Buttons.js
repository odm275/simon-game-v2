import React from 'react';
import FontAwesome from 'react-fontawesome';

const buttons =  [
    [
        <FontAwesome
        name="arrow-circle-up"
        id = "green"
        size="5x"
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        />,
    ]       ,
    [
        <FontAwesome
        name="arrow-circle-right"
        id = "red"
        size="5x"
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        />,
    ],
    [
        <FontAwesome
        name="arrow-circle-down"
        id = "blue"
        size="5x"
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        />,
    ],
    [
        <FontAwesome
        name="arrow-circle-left"
        id="yellow"
        size="5x"
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        />,
    ],
  ];

  export default buttons;