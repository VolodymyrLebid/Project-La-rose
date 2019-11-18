<template>
    <div class="bg-modal">
        <div class="col-7 modal-content">
            <form action="" method="" class="modal-form">
                <label class="modal-title">Залиште свій відгук</label>
                <textarea name="" class="modal-text text-center"></textarea>
                <fieldset class="rating">
                    <input type="radio" id="star5" name="rating" value="5">
                    <label class="full" for="star5"></label>
                    <input type="radio" id="star4" name="rating" value="4">
                    <label class="full" for="star4"></label>
                    <input type="radio" id="star3" name="rating" value="3">
                    <label class="full" for="star3"></label>
                    <input type="radio" id="star2" name="rating" value="2">
                    <label class="full" for="star2"></label>
                    <input type="radio" id="star1" name="rating" value="1">
                    <label class="full" for="star1"></label>
                </fieldset>
                <a href="#" class="primary-btn">Відправити</a>
                <button class="modal-close">
                    <i class="fas fa-times"></i>
                </button>
            </form>
            <div class="modal-succes">
                <p>
                    Ви успішно записались на процедуру косметологія в салоні краси LaRose<br>
                    Дякуємо, що ви обрали нас.<br>
                    Наш оператор зв’яжеться з вами в найближчий час.
                </p>
                <button class="modal-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Modal"
    }
</script>

<style scoped>

</style>
