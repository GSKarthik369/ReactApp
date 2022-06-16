import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './HeaderComponent.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';

const HeaderComponent = props => (
	<div className="todo-header">
		<div className="todo-header-title">
			<FontAwesomeIcon className="list-ul-icon" icon={ faListUl } />
			{props.title}
		</div>
	</div>
);

const HeaderComponentPropTypes = {
	// always use prop types!
};

HeaderComponent.propTypes = HeaderComponentPropTypes;

export default HeaderComponent;
