document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('trip-form');
    const destination = document.getElementById('destination');
    const startDate = document.getElementById('startDate');
    const endDate = document.getElementById('endDate');
    const comments = document.getElementById('comments');
    const charCount = document.getElementById('char-count');
    const submitBtn = document.getElementById('submit-btn');
    const successMessage = document.createElement('p');

    const destinationError = document.getElementById('destination-error');
    const startDateError = document.getElementById('startDate-error');
    const endDateError = document.getElementById('endDate-error');

    function validateForm() {
        let isValid = true;

        destinationError.innerText = '';
        startDateError.innerText = '';
        endDateError.innerText = '';

        if (destination.value.trim() === '') {
            destinationError.innerText = 'Destination is required.';
            isValid = false;
        }

        if (startDate.value === '') {
            startDateError.innerText = 'Start Date is required.';
            isValid = false;
        }

        if (endDate.value === '') {
            endDateError.innerText = 'End Date is required.';
            isValid = false;
        }

        if (startDate.value && endDate.value && startDate.value >= endDate.value) {
            endDateError.innerText = 'End Date must be later than Start Date.';
            isValid = false;
        }

        submitBtn.disabled = !isValid;

        if (submitBtn.disabled) {
            submitBtn.style.backgroundColor = '#999';
        } else {
            submitBtn.style.backgroundColor = '#1b1a1a';
        }

        return isValid;
    }

    comments.addEventListener('input', function() {
        charCount.innerText = `${comments.value.length}/200`;
    });

    form.addEventListener('input', validateForm);

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (validateForm()) {
            successMessage.innerText = 'Form submitted successfully!';
            successMessage.style.display = 'block';
            form.reset();
            setTimeout(() => {
                successMessage.innerText = '';
                successMessage.style.display = 'none';
            }, 5000);
        } else {
            successMessage.innerText = '';
            successMessage.style.display = 'none';
        }
        successMessage.style.color = 'green';
        form.append(successMessage);
    });

    submitBtn.disabled = true;

    submitBtn.addEventListener('mouseover', function() {
        if (!submitBtn.disabled) {
            submitBtn.style.backgroundColor = '#45a049';
        }
    });

    submitBtn.addEventListener('mouseout', function() {
        if (!submitBtn.disabled) {
            submitBtn.style.backgroundColor = '#1b1a1a';
        }
    });
    validateForm();
});
