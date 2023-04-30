'use strict';

function BindedButton({ count, onClick }) {
    return React.createElement(
        'button',
        { onClick: onClick },
        
        'Clicked ', count, ' times'
    );
}
