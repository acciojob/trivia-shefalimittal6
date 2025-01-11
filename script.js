//your code here
function submitAnswer() {
    const options = document.getElementsByName('capital');
    let selectedOption;
    for (const option of options) {
        if (option.checked) {
            selectedOption = option.value;
            break;
        }
    }
    if (selectedOption) {
        alert(`You selected: ${selectedOption}`);
    } else {
        alert('Please select an option.');
    }
}