import './sponsor.less';
import '../base/base.less';

import {UIIcon, UIImage} from 'com/ui';
import NavLink 			from 'com/nav-link/link';

export default function ViewSponsor() {
		return (
			<div class="sidebar-base sidebar-shortlist sidebar-sponsor">
				<div class="-title _font2"><UIIcon baseline>trophy</UIIcon> <span class="-text">Sponsored by</span></div>
				<div><a href="https://ludumdare.com/news/akamai-sponsors-ld-2022/"><UIImage src="///content/b/z/4ee45.png.w200.png" /></a></div>
			</div>
		);
}

