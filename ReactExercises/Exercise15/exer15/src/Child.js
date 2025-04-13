import PropTypes from 'prop-types';


function Child({url,mail,date})
{
    return(
        <>
        <img src={url}  alt="Profile" style={{ width: '150px', height: '150px' }}></img>
        <p>Email: <a href={`mailto:${mail}`}>{mail}</a></p>
        <p>Today’s Date: {date}</p>
        </>
    );
   
}


Child.propTypes = {
    url: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};


export default Child;
