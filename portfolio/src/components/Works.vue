<template>
  <div id="works">
    <HeaderItem />
    works!
    <div class="grid">
        <ItemCard path='@/assets/images/ET8zF7HVAAEWAlP.jpeg'></ItemCard>
    </div>
    <FooterItem />
  </div>

</template>
<script>
import HeaderItem from "./HeaderItem";
import FooterItem from "./FooterItem";
import ItemCard from "./ItemCard";
export default {
  name: "works",
  components: {
    HeaderItem,
    FooterItem,
    ItemCard
  },
  data() {
    return {};
  },
};
</script>

<style scoped>

.grid {
    display: grid; 
    grid-gap: 0px 0px;
}
@media screen and (min-width:480px) { 
.grid {
    grid-template-columns: 1fr;
}
}
@media screen and (min-width:768px) and ( max-width:1024px) {
.grid {
    grid-template-columns: 1fr 1fr;
}
}
@media screen and (min-width:1024px) {
.grid {
    grid-template-columns: 1fr 1fr 1fr;
}
}
</style>
