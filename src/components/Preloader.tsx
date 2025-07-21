import XPreloaderIcon from "../icons/XPreloaderIcon"

const Preloader = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<XPreloaderIcon animated />
		</div>
	)
}

export default Preloader
