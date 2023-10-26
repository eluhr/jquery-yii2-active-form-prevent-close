jQuery.fn.extend({
    preventFromClosing: function () {
        let initialFormData = [];
        let formIsInInitialState = true

        $(this).on('afterInit', function() {
            initialFormData = $(this).serializeArray()
        })

        $(this).on('input', function() {
            formIsInInitialState = JSON.stringify(initialFormData) === JSON.stringify($(this).serializeArray())
        })

        window.onbeforeunload = function (e) {
            if (!formIsInInitialState) {
                e.preventDefault()
                e.returnValue = ''
            }
        }
    }
})
