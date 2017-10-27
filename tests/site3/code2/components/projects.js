import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Projects component for Listing two projects
 */
const Projects = ( props ) => (
	<table>
		<tbody>
			<tr><td>
				{ props.projects[ 0 ] }
			</td><td>
				{ props.projects[ 1 ] }
			</td></tr>
		</tbody>
	</table>
);


Projects.propTypes = {
	/**
	 * projects:
	 *   - partial4.md  # add whatever partial you want
	 *   - partial5.md
	 */
	projects: PropTypes.array.isRequired,
};


Projects.defaultProps = {};


export default Projects;
