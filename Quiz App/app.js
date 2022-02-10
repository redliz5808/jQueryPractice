$(document).ready(() => {
    let pageNum = 1;
    const arrayOfPages = [1, 2, 3, 4, 5];
    const userName = $("#userName");
    const birthdayBanner = $("#birthdayBanner");
    const userLocation = $("#userLocation");
    const userOccupation = $("#userOccupation");
    const userHobbies = $("#userHobbies");
    const userAnimals = $("#userAnimals");
    const userBirthday = $("#userBirthday");
    const userSeason = $("#userSeason");
    const yesNoMaybe = $("#yesNoMaybe");
    const userSite = $("#userSite");
    const userColor = $("#userColor");
    const screen5 = $("#screen5");
    const prev = $("#prevBtn");
    const next = $("#nextBtn");
    const restart = $("#restartBtn");
    let goodHeart = true;

    let userObject = {
        animal: null,
        birthday: null,
        color: null,
        favSite: null,
        location: null,
        name: null,
        occupation: null,
        season: null,
        hobbies: [],
    };

    const monthNames = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December",
    };

    function resetUserObject() {
        userObject.animal = null;
        userObject.birthday = null;
        userObject.color = null;
        userObject.favSite = null;
        userObject.location = null;
        userObject.name = null;
        userObject.occupation = null;
        userObject.season = null;
        userObject.hobbies = [];
    }

    function resetForms() {
        $(":checkbox").prop("checked", false);

        $(":text,input[type='date'],input[type='url'],input[type='color']").val("");

        $("select").val("");
    }

    function provideUserData() {
        // Name Sentence
        if (userObject.name === null) {
            userName.text("err...uh...you didn't, um, give us a name? OK, then.");
        } else {
            userName.text(`${userObject.name.toUpperCase()}!!`);
        }

        // Birthday Banner Display & Birthday/Season Text Display

        (() => {
            // Test if month is in spring
            function checkSeason(enteredBirthday, enteredYear) {
                let birthdaySeason = "";
                if (enteredBirthday !== null && enteredYear !== null) {
                    const springStart = new Date(`${enteredYear}-03-20`);
                    const springEnd = new Date(`${enteredYear}-06-19`);
                    const summerStart = new Date(`${enteredYear}-06-20`);
                    const summerEnd = new Date(`${enteredYear}-09-21`);
                    const fallStart = new Date(`${enteredYear}-09-22`);
                    const fallEnd = new Date(`${enteredYear}-12-20`);
                    const winterStart = new Date(`${enteredYear - 1}-12-21`);
                    const winterEnd = new Date(`${enteredYear}-03-19`);

                    if (
                        enteredBirthday.getTime() <= springEnd.getTime() &&
                        enteredBirthday.getTime() >= springStart.getTime()
                    ) {
                        birthdaySeason = "spring 🌸";
                    } else if (
                        enteredBirthday.getTime() <= summerEnd.getTime() &&
                        enteredBirthday.getTime() >= summerStart.getTime()
                    ) {
                        birthdaySeason = "summer 🌳";
                    } else if (
                        enteredBirthday.getTime() <= fallEnd.getTime() &&
                        enteredBirthday.getTime() >= fallStart.getTime()
                    ) {
                        birthdaySeason = "fall 🍂";
                    } else if (
                        enteredBirthday.getTime() <= winterEnd.getTime() &&
                        enteredBirthday.getTime() >= winterStart.getTime()
                    ) {
                        birthdaySeason = "winter ❄";
                    }
                }

                if (birthdaySeason !== userObject.season && userObject.birthday !== null) {
                    yesNoMaybe.text("NOT");
                } else if (birthdaySeason !== userObject.season && userObject.birthday === null) {
                    yesNoMaybe.text("maybe (we have no idea because you're too secretive)");
                } else {
                    yesNoMaybe.text("");
                }

                if (userObject.season === null) {
                    userSeason.text("some time during the year that's special to you");
                } else {
                    userSeason.text(userObject.season);
                }
            }

            // Check if birthday is null
            if (userObject.birthday === null) {
                userBirthday.text("...well we don't know when your birthday is because you didn't tell us...");
                checkSeason(null, null);
            } else {
                const birthdayAsDate = new Date(userObject.birthday);
                const userMonth = birthdayAsDate.getUTCMonth();
                const userDay = birthdayAsDate.getUTCDate();
                const userYear = birthdayAsDate.getFullYear();
                const userString = `${userMonth}/${userDay}`;
                
                const today = new Date();
                const todayMonth = today.getUTCMonth();
                const todayDay = today.getUTCDate();
                const todayString = `${todayMonth}/${todayDay}`;
                userBirthday.text(`${monthNames[userMonth]} ${userDay}`);

                if (userString === todayString) {
                    birthdayBanner.css("display", "block");
                } else {
                    birthdayBanner.css("display", "none");
                }
                checkSeason(birthdayAsDate, userYear);
            }

        })();

        // Location Sentence
        if (userObject.location === null) {
            userLocation.text("some super secret location that no one is allowed to know about");
        } else {
            userLocation.text(userObject.location);
        }

        // Occupation Sentence
        if (userObject.occupation === null) {
            userOccupation.text("super secret operative that keeps the world's secrets safe");
        } else {
            userOccupation.text(userObject.occupation);
        }

        // Hobby Sentence
        let hobbySentence = () => {
            let sentence = "";
            if (userObject.hobbies.length === 0) {
                sentence = "laying around doing absolutely nothing while the rest of us enjoy our lives";
            } else if (userObject.hobbies.length > 2) {
                $.each(userObject.hobbies, (i, hobby) => {
                    if (i < userObject.hobbies.length - 1) {
                        sentence += `${hobby}, `;
                    } else {
                        sentence += `and ${hobby}`;
                    }
                });
            } else if (userObject.hobbies.length === 2) {
                $.each(userObject.hobbies, (i, hobby) => {
                    if (i < userObject.hobbies.length - 1) {
                        sentence += `${hobby} `;
                    } else {
                        sentence += `and ${hobby}`;
                    }
                });
            } else if (userObject.hobbies.length === 0) {
                sentence = "...nothing? really? ok...";
            } else {
                sentence = userObject.hobbies[0];
            }
            return sentence;
        };
        userHobbies.text(hobbySentence);

        // Animal Sentence
        if (userObject.animal === null) {
            userAnimals.text(
                "living in a world void of all other life because you're a miserable human (if you really are even human)"
            );
        } else {
            userAnimals.text(userObject.animal);
        }

        // Color Sentence
        if (userObject.color === null) {
            userObject.color = "#000000";
            screen5.css("background-color", "#000000");
            goodHeart = false;
        } else {
            goodHeart = true;
            screen5.css("background-color", userObject.color);
        }

        // Color Helper
        (() => {
            let hexColor = userObject.color.replace("#", "");
            let r = parseInt(hexColor.substr(0, 2), 16);
            let g = parseInt(hexColor.substr(2, 2), 16);
            let b = parseInt(hexColor.substr(4, 2), 16);
            let yiq = (r * 299 + g * 587 + b * 114) / 1000;
            let fontColor = yiq >= 128 ? "black" : "white";
            screen5.css("color", fontColor);
        })();

        if (goodHeart) {
            userColor.text("Notice that we also made this page your favorite color. It's because we care. 😉");
        } else {
            userColor.text("You didn't select a color so we made the page as black as your heart. 😈");
        }

        // Website Insertion
        if (userObject.favSite === null) {
            userSite.attr("src", "sub.html");
        } else {
            userSite.attr("src", userObject.favSite);
        }
    }

    function updatePage(num) {
        let screenName = "#screen" + num;
        $(`${screenName}`).css("display", "flex");
        $(arrayOfPages).each((i, page) => {
            let pageScreenName = "#screen" + page;
            if (page !== num) {
                $(`${pageScreenName}`).css("display", "none");
            }
        });
        if (pageNum === 1) {
            prev.css("display", "none");
            next.css("display", "inline-block");
            restart.css("display", "none");
        } else if (pageNum === arrayOfPages.length) {
            next.css("display", "none");
            prev.css("display", "none");
            restart.css("display", "inline-block");
            provideUserData();
        } else {
            next.css("display", "inline-block");
            prev.css("display", "inline-block");
            restart.css("display", "none");
        }
    }

    updatePage(pageNum);

    // --- FORM FIELD FUNCTIONS --- //

    $(":checkbox").change((e) => {
        if (userObject.hobbies.includes(e.target.id)) {
            userObject.hobbies = userObject.hobbies.filter((hobby) => hobby !== e.target.id);
        } else {
            userObject.hobbies.push(e.target.id);
        }
    });

    $(":text,input[type='date'],input[type='url'],input[type='color']").change((e) => {
        userObject[e.target.id] = e.target.value;
    });

    $("select").change((e) => {
        userObject[e.target.id] = e.target.value;
    });

    // --- BUTTON FUNCTIONS --- //

    next.click((e) => {
        e.preventDefault();
        pageNum++;
        updatePage(pageNum);
    });

    prev.click((e) => {
        e.preventDefault();
        pageNum--;
        updatePage(pageNum);
    });

    restart.click((e) => {
        e.preventDefault();
        pageNum = 1;
        updatePage(pageNum);
        resetUserObject();
        resetForms();
    });
});
