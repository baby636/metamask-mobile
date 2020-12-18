import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Modal from 'react-native-modal';
import { colors } from '../../../../styles/common';

import ModalDragger from '../../../Base/ModalDragger';
import Text from '../../../Base/Text';
import SlippageSlider from '../../SlippageSlider';
import { strings } from '../../../../../locales/i18n';

const styles = StyleSheet.create({
	modal: {
		margin: 0,
		justifyContent: 'flex-end'
	},
	modalView: {
		backgroundColor: colors.white,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10
	},
	content: {
		marginVertical: 14,
		paddingHorizontal: 30
	},
	slippageWrapper: {
		marginVertical: 10
	}
});

function SlippageModal({ isVisible, dismiss, onChange, slippage }) {
	return (
		<Modal
			isVisible={isVisible}
			onBackdropPress={dismiss}
			onBackButtonPress={dismiss}
			onSwipeComplete={dismiss}
			swipeDirection="down"
			propagateSwipe
			style={styles.modal}
		>
			<SafeAreaView style={styles.modalView}>
				<ModalDragger />
				<View style={styles.content}>
					<Text bold centered primary>
						{strings('swaps.max_slippage')}
					</Text>

					<View style={styles.slippageWrapper}>
						<SlippageSlider
							range={[1, 5]}
							increment={1}
							onChange={onChange}
							defaultValue={slippage}
							formatTooltipText={text => `${text}%`}
						/>
					</View>

					<Text small centered>
						{strings('swaps.slippage_info')}
					</Text>
				</View>
			</SafeAreaView>
		</Modal>
	);
}

SlippageModal.propTypes = {
	isVisible: PropTypes.bool,
	dismiss: PropTypes.func,
	onChange: PropTypes.func,
	slippage: PropTypes.number
};
export default SlippageModal;
