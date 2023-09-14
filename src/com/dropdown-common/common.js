import { Component } from 'preact';
import './common.less';
import classNames						from 'classnames';

import DropdownBase						from 'com/dropdown-base/base';

export default class DropdownCommon extends Component {
	constructor( props ) {
		super(props);
	}

	render( props ) {
		return <DropdownBase {...props} class={classNames(props.class, 'dropdown-common')} />;
	}
}
