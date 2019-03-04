/*
 * Name:bootstrap-toasts
 * author:张成林<469946668@qq.com>
 * Github:https://github.com/zhangchenglin/bootstrap-toasts
 * Copyright (C) 张成林 2019
 * Licenses:MIT
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
*/

function bootstrapToasts(title, content, releaseTime, delay, position, messageType) {
    let Time = new Date().getTime();
    let toastsID = "toasts_" + Time;
    let toasts_area_ID = "toasts_area_" + Time;
    let document_body = document.querySelector("body");
    let toasts_area = document.createElement("div");
    let toasts = document.createElement("div");
    let toasts_header = document.createElement("div");
    let toasts_header_strong = document.createElement("strong");
    let toasts_header_small = document.createElement("small");
    let toasts_header_button = document.createElement("button");
    let toasts_header_span = document.createElement("span");
    let toasts_body = document.createElement("div");

    switch (position) {
        case "left":
            toasts_area.className = "mb-1 d-flex justify-content-start align-items-center";
            break;
        case "right":
            toasts_area.className = "mb-1 d-flex justify-content-end align-items-center";
            break;
        case "center":
        default:
            toasts_area.className = "mb-1 d-flex justify-content-center align-items-center";
    }
    toasts_area.id = toasts_area_ID;
    toasts.className = "toasts";
    toasts.id = toastsID;
    toasts.setAttribute("data-animation", "true");
    toasts.setAttribute("data-autohide", "true");
    delay = delay ? delay * 1e3 : 10e3;
    toasts.setAttribute("data-delay", delay);
    switch (messageType) {
        case 0:
            toasts.setAttribute("role", "status");
            toasts.setAttribute("aria-live", "polite");
            break;
        case 1:
        default:
            toasts.setAttribute("role", "alert");
            toasts.setAttribute("aria-live", "assertive");
    }

    toasts.setAttribute("aria-atomic", "true");
    toasts_header.className = "toasts_header";
    toasts_header_strong.className = "mr-auto";
    toasts_header_small.className = "text-muted";
    toasts_header_button.className = "ml-2 mb-1 close";
    toasts_header_button.setAttribute("data-dismiss", "toasts");
    toasts_header_button.setAttribute("aria-label", "Close");
    toasts_header_span.setAttribute("aria-hidden", "true");
    toasts_header_span.innerHTML = "&times;";
    toasts_header_strong.innerHTML = title ? title : "";
    toasts_header_small.innerHTML = releaseTime ? releaseTime : "";
    toasts_header_button.appendChild(toasts_header_span);
    toasts_header.appendChild(toasts_header_strong);
    toasts_header.appendChild(toasts_header_small);
    toasts_header.appendChild(toasts_header_button);
    toasts_body.className = "toasts-body";
    toasts_body.innerHTML = content ? content : "";
    toasts.appendChild(toasts_header);
    toasts.appendChild(toasts_body);
    toasts_area.appendChild(toasts);
    document_body.appendChild(toasts_area);
    $("#" + toastsID).toast("show");
    romove_bootstrapToasts(toastsID, delay);
    remove_bootstrapToasts_area(toasts_area_ID, delay);
}

function remove_bootstrapToasts_area(id, delay) {
    let toasts_area = document.querySelector("#" + id);
    delay = delay ? delay + 2e0 : 12e0;
    setTimeout(function () {
        toasts_area.parentElement.removeChild(toasts_area);
    }, delay)
}

function romove_bootstrapToasts(id, delay) {
    let toasts = document.querySelector("#" + id);
    delay = delay ? delay + 2e0 : 12e0;
    setTimeout(function () {
        toasts.parentElement.removeChild(toasts);
    }, delay)
}
