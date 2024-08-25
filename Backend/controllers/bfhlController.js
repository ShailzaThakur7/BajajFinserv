exports.handlePostRequest = (req, res) => {
    const { data } = req.body;

    if (!Array.isArray(data)) {
        return res.status(400).json({ is_success: false, error: 'Invalid input format' });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const lowercaseAlphabets = alphabets.filter(item => item === item.toLowerCase() && isNaN(item));

    const highestLowercaseAlphabet = lowercaseAlphabets.sort().pop() || '';

    res.json({
        is_success: true,
        user_id: 'shailza_thakur_25122000',
        email: 'shailza@college.com',
        roll_number: 'ABCD123',
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
    });
};

exports.handleGetRequest = (req, res) => {
    res.json({
        operation_code: 1
    });
};
