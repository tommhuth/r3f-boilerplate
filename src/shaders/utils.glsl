float luma(vec3 color) {
    return dot(color, vec3(0.299, 0.587, 0.114));
} 