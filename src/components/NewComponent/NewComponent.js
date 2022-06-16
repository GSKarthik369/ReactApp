import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './NewComponent.scss';
// import { functionTypeParam } from '@babel/types';
// import ModalComponent from '../../components/ModalComponent/ModalComponent';

const NewComponent = props => (
	<div className="nc-para">
		<div className="card">
			<p className="card-title">{props.title}</p>
			<div className="card-footer">
				<button
					className="del-btn btn btn-danger"
					// onClick={deleteHandler}
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
// class NewComponent extends React.Component {
//   render() {
//     return <div>This is a component called NewComponent.</div>;
//   }
// }

// const NewComponentPropTypes = {
// 	// always use prop types!
// };

// NewComponent.propTypes = NewComponentPropTypes;

export default NewComponent;
