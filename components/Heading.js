'use strict';

function Heading({ text }) {
    const [isRed, setIsRed] = React.useState(false);
  
    const handleClick = () => {
        setIsRed(prevState => !prevState);
    }

    return React.createElement(
        'h1',
        { onClick: handleClick },
        
        text
    );
}
