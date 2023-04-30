'use strict';

function LikeButton() {
    const [isOn, setIsOn] = React.useState(false);
  
    const handleClick = () => {
      setIsOn(prevState => !prevState);
    }

    return React.createElement(
        'button',
        { onClick: handleClick },
        
        `${isOn ? 'You liked this!' : 'Like'}`
    );
}
