document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const featureLinkElems = document.querySelectorAll('.feature__link');
    const featureSubElems = document.querySelectorAll('.feature-sub');
    
    featureLinkElems.forEach(elem=>{
        elem.addEventListener('click', ()=>{
            if (elem.classList.contains('feature__link_active')) {
                elem.classList.toggle('feature__link_active');
                elem.nextElementSibling.classList.toggle('hidden');
            } else {
                featureLinkElems.forEach(el=>{
                    el.classList.remove('feature__link_active');
                    el.nextElementSibling.classList.add('hidden');
                });
                elem.classList.toggle('feature__link_active');
                elem.nextElementSibling.classList.toggle('hidden');
            }
            
        })
    })
});