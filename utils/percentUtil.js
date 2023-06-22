import { Dimensions, PixelRatio, Platform } from 'react-native';

// Utility function to adjust percentage values based on screen size
export function normalizePercentage(percentage) {
    const { width } = Dimensions.get('window');
    // Adjust the scale factor as required
    const scaleFactor = width / 320;
    return percentage * scaleFactor;
}

// example to apply it `${normalizePercentage(50)}%` 