import React from 'react';

function Stream({ tracks = [] }) {
	render() {
		const { tracks = [] } = this.props;

		return (
			<div>
				{
					tracks.map((track, key) => {
						return <div className="track" key={key}>{track.title}</div>;
					})
				}
			</div>
		);
	}
}

export default Stream;