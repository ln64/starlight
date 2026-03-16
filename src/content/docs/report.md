---
title: 投诉与举报中心
description: 提交你的投诉或举报
---

<div style="background: var(--sl-color-gray-7); border: 1px solid var(--sl-color-gray-5); border-radius: 8px; padding: 20px; max-width: 600px; margin: 0 auto; color: var(--sl-color-text);">

<p style="color: var(--sl-color-gray-2); margin-bottom: 20px;">匿名 · 90% 举报成功率</p>

<hr style="border: none; border-top: 1px solid var(--sl-color-gray-5); margin: 20px 0;" />

<form id="complaintForm" onsubmit="return handleSubmit(event)">

### 1. 违规网址 *
<input type="text" id="url" placeholder="请输入" required style="width: 100%; padding: 8px; border: 1px solid var(--sl-color-gray-5); border-radius: 4px; margin: 5px 0 15px 0; box-sizing: border-box; background: var(--sl-color-gray-6); color: var(--sl-color-text);" />

### 2. 涉嫌违规项目 *
<div style="margin: 10px 0;" id="checkboxes">
  <div style="margin: 5px 0;"><input type="checkbox" id="a" /> <label for="a" style="color: var(--sl-color-text);">A. 色情</label></div>
  <div style="margin: 5px 0;"><input type="checkbox" id="b" /> <label for="b" style="color: var(--sl-color-text);">B. 暴力/血腥</label></div>
  <div style="margin: 5px 0;"><input type="checkbox" id="c" /> <label for="c" style="color: var(--sl-color-text);">C. 毒品、枪支、管制刀具、野生动物等</label></div>
  <div style="margin: 5px 0;"><input type="checkbox" id="d" /> <label for="d" style="color: var(--sl-color-text);">D. 诈骗、洗钱、非法集资</label></div>
  <div style="margin: 5px 0;"><input type="checkbox" id="e" /> <label for="e" style="color: var(--sl-color-text);">E. 严重政治问题</label></div>
  <div style="margin: 5px 0;"><input type="checkbox" id="f" /> <label for="f" style="color: var(--sl-color-text);">F. 侵犯知识产权</label></div>
  <div style="margin: 5px 0;"><input type="checkbox" id="g" /> <label for="g" style="color: var(--sl-color-text);">G. 虚假、不实、诽谤等信息</label></div>
  <div style="margin: 5px 0;"><input type="checkbox" id="h" /> <label for="h" style="color: var(--sl-color-text);">H. 冒用他人身份</label></div>
  <div style="margin: 5px 0;"><input type="checkbox" id="i" /> <label for="i" style="color: var(--sl-color-text);">I. 其它</label></div>
</div>

### 3. 备注
<textarea 
  id="remarks" 
  placeholder="请输入" 
  rows="4"
  style="width: 100%; 
         height: 100px; 
         padding: 8px; 
         border: 1px solid var(--sl-color-gray-5); 
         border-radius: 4px; 
         margin: 5px 0 15px 0; 
         box-sizing: border-box; 
         font-family: inherit;
         resize: none;
         background: var(--sl-color-gray-6);
         color: var(--sl-color-text);"
></textarea>

### 4. 昵称
<input type="text" id="nickname" placeholder="请输入" style="width: 100%; padding: 8px; border: 1px solid var(--sl-color-gray-5); border-radius: 4px; margin: 5px 0 15px 0; box-sizing: border-box; background: var(--sl-color-gray-6); color: var(--sl-color-text);" />

### 5. 电话
<input type="text" id="phone" placeholder="请输入" style="width: 100%; padding: 8px; border: 1px solid var(--sl-color-gray-5); border-radius: 4px; margin: 5px 0 15px 0; box-sizing: border-box; background: var(--sl-color-gray-6); color: var(--sl-color-text);" />

<div style="text-align: center; margin: 30px 0;">
  <button type="submit" id="submitBtn" style="background: var(--sl-color-text-accent); color: white; border: none; padding: 10px 30px; border-radius: 4px; font-size: 16px; cursor: pointer;">提交</button>
</div>

</form>

<p style="color: var(--sl-color-gray-2); font-size: 14px; text-align: center; margin-top: 20px;">📧 正式投诉请发送邮件至：cscs9964@gmail.com</p>

</div>

<script>
function checkRequiredFields() {
  const url = document.getElementById('url').value.trim();
  const checkboxes = document.querySelectorAll('#checkboxes input[type="checkbox"]');
  let atLeastOneChecked = false;
  
  for (let cb of checkboxes) {
    if (cb.checked) {
      atLeastOneChecked = true;
      break;
    }
  }
  
  return url !== '' && atLeastOneChecked;
}

function handleSubmit(event) {
  event.preventDefault();
  
  if (!checkRequiredFields()) {
    alert('请填写违规网址并至少选择一项违规项目');
    return false;
  }
  
  window.location.href = 'https://up.woozooo.com';
  return false;
}

document.addEventListener('DOMContentLoaded', function() {
  const urlInput = document.getElementById('url');
  const checkboxes = document.querySelectorAll('#checkboxes input[type="checkbox"]');
  const submitBtn = document.getElementById('submitBtn');
  
  function updateButtonStyle() {
    if (checkRequiredFields()) {
      submitBtn.style.background = 'var(--sl-color-text-accent)';
      submitBtn.style.opacity = '1';
      submitBtn.style.cursor = 'pointer';
    } else {
      submitBtn.style.background = 'var(--sl-color-gray-5)';
      submitBtn.style.opacity = '0.7';
      submitBtn.style.cursor = 'not-allowed';
    }
  }
  
  urlInput.addEventListener('input', updateButtonStyle);
  checkboxes.forEach(cb => cb.addEventListener('change', updateButtonStyle));
});
</script>
<script is:inline src="//sdk.51.la/js-sdk-pro.min.js"></script>
<script is:inline>
  LA.init({id:"L8DDad4Eu3kbeHo6",ck:"L8DDad4Eu3kbeHo6"})
</script>
