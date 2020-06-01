$(function () {

    let messages = ["You're a great friend.", "Today' your's birthday.", "Wishing you all the best."]
    let $list, $newItemForm;
    let indiceMessage = 0;
    let classCouleurs = ["alert-success", "alert-warning", "alert-danger"]
    $list = $('ul');
    $newItemForm = $('#newItemForm');

    $newItemForm.on('submit', function (e) {
        e.preventDefault();
        $list.append('<li>' + messages[$list.length] + '</li>');
    });

    $list.on('click', function () {
        if (indiceMessage < 3) {
            $list.append('<li class="' + classCouleurs[indiceMessage] + '">' + messages[indiceMessage] + '</li>');
            indiceMessage++;
        }
        if (indiceMessage === 3) {
            let bodyStyle = getComputedStyle(document.getElementById("body"));
            document.body.style.backgroundImage = "url(\"../ressources/anniversaire.jpg\")";
            for (i = 0; i < $list.length; i++){
                let newElt = document.createElement("li");
                newElt.textContent = "Happy Birthday !!!";
                newElt.class = "alert-success";
                document.getElementsByClassName(classCouleurs[i]).replaceChild(newElt, document.getElementsByClassName(classCouleurs[i]));
            }
        }

    });

});