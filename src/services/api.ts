export const submitDemoRequest = async (data: any) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Mock API: Data submitted successfully', data);
            resolve({ success: true, message: 'Request received' });
        }, 1500);
    });
};
