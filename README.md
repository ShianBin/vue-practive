#Vue-Practive


VSCode 必要外掛套件
indent-rainbow : 語法編輯時，使用Tab空格時顯示顏色，表語法層次性
Prettier - Code formatter : 自動排版 scss
vscode-icons : 檔案圖示

### Vue 的指令篇

- v-model 雙向綁定 - 綁定表單、資料綁定
- v-bind 綁定屬性 - 綁定 attribute
- v-on 綁定事件 - 綁定事件(點擊、滑動、移出移入等..)
- v-if/v-else/v-else-if 條件判斷 - 判斷顯示畫面
- v-for 列表渲染 - 渲染出多個資料

### v-model 修飾符

常用的修飾符有三種 lazy、 number 、trim :

.lazy
當 Change 事件後才會修改畫面

.trim
為了避免 User 常在輸入表單會誤按空格造成錯誤

.number
從字串自動轉換成數字，或是可以加入 type="number"也是一樣的意思

### v-bind

- 綁定你的 attributes(屬性)
- v-bind 簡寫、縮寫
- 常見運用 -Button 加一個 disabled
- 試著綁定多個 attribute (屬性)

### v-on

- 綁定你的 event 事件
- v-on 簡寫、縮寫 @
- v-on 常用修飾符

v-on 常用修飾符
.prevent 取消預設行為 = event.preventDefault()
.stop 取消事件冒泡 = event.stopPropagation()


v-if - 會直接抽取掉 html ，是操作在 Dom 元素上
v-show - 是透過 CSS 語法 display:none 切換顯示隱藏，雖然畫面隱藏實際上還是存在
另外要注意的是 v-show 不支援 template
