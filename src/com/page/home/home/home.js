import {h, Component}					from 'preact/preact';

import ContentList						from 'com/content-list/list';
import ContentTimeline					from 'com/content-timeline/timeline';
import ContentHeadliner					from 'com/content-headliner/headliner';

export default class PageHomeHome extends Component {
	render( props ) {
		let {node, user, path, extra} = props;

		return (
			<ContentList class="page-home-home">
				<ContentTimeline types={['post']} subtypes={['news']} methods={['all']} minimized nomore noemptymessage limit={1} node={node} user={user} path={path} extra={extra} />
				<ContentTimeline types={['post']} methods={['all']} node={node} user={user} path={path} extra={extra} />
			</ContentList>
		);
	}
//				<ContentHeadliner node={[node, node]} />
}
