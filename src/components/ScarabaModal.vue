<script setup lang="ts">
defineProps<{
  modalId: string
}>()
</script>

<template>
  <div :id="modalId" class="modal fade template-modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">

        <!--Modal header-->
        <div class="modal-header" v-if="$slots['modal-title'] || $slots['modal-close']">
          <!--Modal title-->
          <h5 class="modal-title text-left">
            <slot name="modal-title" />
          </h5>

          <!--Modal close-->
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div><!--end modal header-->

        <!--Modal body-->
        <div class="modal-body text-left">
          <slot name="modal-body">
            <p style="color: red;">Error: The modal body content is required!</p>
          </slot>
        </div><!--End modal body-->

        <!--Modal footer-->
        <div class="modal-footer text-center" v-if="$slots['modal-footer']">
          <slot name="modal-footer" />
        </div><!--end modal footer-->

      </div><!--end modal content-->
    </div>
  </div><!--end modal-->
</template>
