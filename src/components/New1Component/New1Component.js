import React from 'react';
import PropTypes from 'prop-types';
import styles from './New1Component.scss';

const New1Component = props => (
	<div className="nc-para">
		<div className="card">
			<p className="card-title">{props.title}</p>
			<div className="card-footer">
				<button
					className="del-btn btn btn-danger"
					onClick={deleteHandler}
				>
					Delete
				</button>
			</div>
			{/* <ModalComponent /> */}
		</div>
	</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class New1Component extends React.Component {
//   render() {
//     return <div>This is a component called New1Component.</div>;
//   }
// }

const New1ComponentPropTypes = {
	// always use prop types!
};

New1Component.propTypes = New1ComponentPropTypes;

export default New1Component;
