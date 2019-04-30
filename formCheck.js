$(document).ready( function (){
    $("#your_form").submit( function(submitEvent) {

        // get the file name, possibly with path (depends on browser)
        var filename = $("#file_input").val();

        // Use a regular expression to trim everything before final dot
        var extension = filename.replace(/^.*\./, '');

        // Iff there is no dot anywhere in filename, we would have extension == filename,
        // so we account for this possibility now
        if (extension == filename) {
            extension = '';
        } else {
            // if there is an extension, we convert to lower case
            // (N.B. this conversion will not effect the value of the extension
            // on the file upload.)
            extension = extension.toLowerCase();
        }

        switch (extension) {
            case 'jpg':
            case 'jpeg':
            case 'png':
                alert("it's got an extension which suggests it's a PNG or JPG image (but N.B. that's only its name, so let's be sure that we, say, check the mime-type server-side!)");

            // uncomment the next line to allow the form to submitted in this case:
//          break;

            default:
                // Cancel the form submission
                submitEvent.preventDefault();
        }

  });
});
