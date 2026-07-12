(function() {
    // ========== 30 RECIPES WITH FULL DETAILS ==========
    const RECIPES = [
        {
            name: 'Chocolate Cake',
            ingredients: ['Flour','Sugar','Eggs','Butter','Cocoa Powder','Baking Powder','Vanilla'],
            fullIngredients: ['2 cups Flour','1.5 cups Sugar','3 Eggs','1 cup Butter','0.5 cup Cocoa Powder','2 tsp Baking Powder','2 tsp Vanilla'],
            servings: '8',
            prep: '45 min',
            difficulty: 'Easy',
            calories: '380',
            imageUrl: 'chockle cake.jpg',
            instructions: [
                'Preheat oven to 175°C (350°F). Grease and flour two 9-inch round cake pans.',
                'In a large bowl, sift together flour, cocoa powder, and baking powder. Set aside.',
                'In another bowl, cream butter and sugar until light and fluffy using an electric mixer.',
                'Add eggs one at a time, beating well after each addition. Stir in vanilla extract.',
                'Gradually add the dry ingredients to the wet mixture, alternating with milk (if needed). Mix until just combined.',
                'Pour the batter evenly into the prepared pans and smooth the tops.',
                'Bake for 30-35 minutes, or until a toothpick inserted in the center comes out clean.',
                'Let cool in pans for 10 minutes, then transfer to wire racks to cool completely.',
                'Frost with your favorite chocolate buttercream and serve.'
            ],
            tip: 'Use room temperature butter and eggs for a smoother batter. Sift cocoa powder to remove lumps.'
        },
        {
            name: 'Banana Bread',
            ingredients: ['Flour','Sugar','Eggs','Butter','Banana','Baking Powder','Cinnamon'],
            fullIngredients: ['2 cups Flour','1 cup Sugar','2 Eggs','0.5 cup Butter','3 Bananas','1 tsp Baking Powder','1 tsp Cinnamon'],
            servings: '8',
            prep: '60 min',
            difficulty: 'Easy',
            calories: '340',
            imageUrl: 'banan cake.jpg',
            instructions: [
                'Preheat oven to 165°C (325°F). Grease a 9x5 inch loaf pan.',
                'In a large bowl, mash the bananas with a fork until smooth.',
                'Melt the butter and mix it with the mashed bananas.',
                'Add sugar and eggs, mixing well until combined.',
                'In a separate bowl, sift together flour, baking powder, and cinnamon.',
                'Gradually add the dry ingredients to the banana mixture, stirring until just combined.',
                'Pour the batter into the prepared loaf pan and smooth the top.',
                'Bake for 50-60 minutes, or until a toothpick inserted in the center comes out clean.',
                'Let cool in the pan for 10 minutes, then transfer to a wire rack to cool completely.',
                'Slice and serve warm or at room temperature.'
            ],
            tip: 'Use overripe bananas with brown spots for the best flavour and natural sweetness.'
        },
        {
            name: 'Strawberry Cheesecake',
            ingredients: ['Cream Cheese','Sugar','Eggs','Strawberries','Butter','Vanilla'],
            fullIngredients: ['500g Cream Cheese','1 cup Sugar','3 Eggs','1 cup Strawberries','0.5 cup Butter','1 tsp Vanilla'],
            servings: '10',
            prep: '50 min',
            difficulty: 'Medium',
            calories: '420',
            imageUrl: 'strebery chees.jpg',
            instructions: [
                'Preheat oven to 160°C (325°F). Grease a 9-inch springform pan.',
                'For the crust: crush graham crackers and mix with melted butter. Press into the bottom of the pan.',
                'In a large bowl, beat cream cheese and sugar until smooth and creamy.',
                'Add eggs one at a time, beating well after each addition. Stir in vanilla.',
                'Pour the cream cheese mixture over the crust and smooth the top.',
                'Bake in a water bath for 45-50 minutes, or until the center is set but slightly jiggly.',
                'Turn off the oven and let the cheesecake cool inside with the door slightly open for 1 hour.',
                'Refrigerate for at least 4 hours or overnight.',
                'Top with fresh strawberries before serving.'
            ],
            tip: 'Use full-fat cream cheese for the creamiest texture. A water bath prevents cracking.'
        },
        {
            name: 'Vanilla Sponge Cake',
            ingredients: ['Flour','Sugar','Eggs','Milk','Butter','Vanilla','Baking Powder'],
            fullIngredients: ['1.5 cups Flour','1 cup Sugar','3 Eggs','0.75 cup Milk','0.5 cup Butter','2 tsp Vanilla','2 tsp Baking Powder'],
            servings: '8',
            prep: '35 min',
            difficulty: 'Medium',
            calories: '290',
            imageUrl: 'cake spong.jpg',
            instructions: [
                'Preheat oven to 180°C (350°F). Grease and flour a 9-inch round cake pan.',
                'Separate the egg whites from the yolks. In a large bowl, beat egg whites until stiff peaks form.',
                'In another bowl, cream butter and sugar until light and fluffy. Add egg yolks one at a time.',
                'Add vanilla extract and mix well.',
                'Sift flour and baking powder together. Add to the butter mixture alternately with milk.',
                'Gently fold in the beaten egg whites using a spatula until just combined.',
                'Pour the batter into the prepared pan and smooth the top.',
                'Bake for 25-30 minutes, or until golden brown and a toothpick comes out clean.',
                'Let cool in the pan for 10 minutes, then transfer to a wire rack.',
                'Serve with fresh cream and berries.'
            ],
            tip: 'Sift flour twice for a lighter texture. Fold egg whites gently to keep the batter airy.'
        },
        {
            name: 'Honey Cake',
            ingredients: ['Flour','Sugar','Eggs','Honey','Butter','Cinnamon','Milk'],
            fullIngredients: ['2 cups Flour','1 cup Sugar','3 Eggs','0.5 cup Honey','0.5 cup Butter','1 tsp Cinnamon','0.5 cup Milk'],
            servings: '10',
            prep: '55 min',
            difficulty: 'Easy',
            calories: '360',
            imageUrl: 'honey cake.jpg',
            instructions: [
                'Preheat oven to 170°C (340°F). Grease and flour a bundt pan or 10-inch round pan.',
                'In a large bowl, cream butter and sugar until light and fluffy.',
                'Add eggs one at a time, beating well after each addition.',
                'Stir in honey and mix until well combined.',
                'In a separate bowl, sift together flour, baking powder, and cinnamon.',
                'Add the dry ingredients to the wet mixture alternately with milk.',
                'Pour the batter into the prepared pan and smooth the top.',
                'Bake for 40-45 minutes, or until golden brown and a toothpick comes out clean.',
                'Let cool in the pan for 15 minutes, then invert onto a wire rack.',
                'Drizzle with extra honey before serving.'
            ],
            tip: 'Use good quality honey for the best flavour. This cake stays moist for days.'
        },
        {
            name: 'Lemon Cheesecake',
            ingredients: ['Cream Cheese','Sugar','Eggs','Butter','Vanilla','Milk','Lemon'],
            fullIngredients: ['500g Cream Cheese','1 cup Sugar','3 Eggs','0.5 cup Butter','1 tsp Vanilla','0.5 cup Milk','1 Lemon (zest & juice)'],
            servings: '10',
            prep: '65 min',
            difficulty: 'Medium',
            calories: '400',
            imageUrl: 'lemon cake.jpg',
            instructions: [
                'Preheat oven to 160°C (325°F). Grease a 9-inch springform pan.',
                'For the crust: crush digestive biscuits and mix with melted butter. Press into the bottom of the pan.',
                'In a large bowl, beat cream cheese and sugar until smooth and creamy.',
                'Add eggs one at a time, beating well after each addition.',
                'Stir in lemon zest, lemon juice, and vanilla extract.',
                'Pour the mixture over the crust and smooth the top.',
                'Bake in a water bath for 55-60 minutes, or until set but slightly jiggly in the center.',
                'Turn off the oven and let cool inside with the door slightly open for 1 hour.',
                'Refrigerate for at least 4 hours or overnight.',
                'Garnish with lemon slices and fresh berries before serving.'
            ],
            tip: 'Use fresh lemons for the best flavour. A water bath prevents cracking.'
        },
        {
            name: 'Carrot Cake',
            ingredients: ['Flour','Sugar','Eggs','Butter','Cinnamon','Baking Powder','Vanilla','Carrots'],
            fullIngredients: ['2 cups Flour','1.5 cups Sugar','3 Eggs','0.75 cup Butter','2 tsp Cinnamon','2 tsp Baking Powder','2 tsp Vanilla','3 cups Grated Carrots'],
            servings: '12',
            prep: '55 min',
            difficulty: 'Easy',
            calories: '350',
            imageUrl: 'carot cake.jpg',
            instructions: [
                'Preheat oven to 180°C (350°F). Grease and flour a 9x13 inch baking pan.',
                'In a large bowl, sift together flour, baking powder, and cinnamon.',
                'In another bowl, cream butter and sugar until light and fluffy.',
                'Add eggs one at a time, beating well after each addition. Stir in vanilla.',
                'Gradually add the dry ingredients to the wet mixture, mixing until just combined.',
                'Fold in the grated carrots.',
                'Pour the batter into the prepared pan and smooth the top.',
                'Bake for 45-50 minutes, or until a toothpick inserted in the center comes out clean.',
                'Let cool completely before frosting with cream cheese frosting.',
                'Decorate with chopped walnuts if desired.'
            ],
            tip: 'Add walnuts or pecans for extra crunch. Let the cake cool completely before frosting.'
        },
        {
            name: 'Blueberry Muffins',
            ingredients: ['Flour','Sugar','Eggs','Milk','Butter','Baking Powder','Vanilla','Blueberries'],
            fullIngredients: ['2 cups Flour','0.75 cup Sugar','2 Eggs','0.5 cup Milk','0.5 cup Butter','2 tsp Baking Powder','1 tsp Vanilla','1.5 cups Blueberries'],
            servings: '12',
            prep: '30 min',
            difficulty: 'Easy',
            calories: '250',
            imageUrl: 'moffine.jpg',
            instructions: [
                'Preheat oven to 190°C (375°F). Line a 12-cup muffin tin with paper liners.',
                'In a large bowl, sift together flour and baking powder.',
                'In another bowl, whisk together melted butter, sugar, eggs, milk, and vanilla.',
                'Pour the wet ingredients into the dry ingredients and stir until just combined (don\'t overmix).',
                'Gently fold in the blueberries.',
                'Divide the batter evenly among the muffin cups.',
                'Bake for 18-22 minutes, or until golden brown and a toothpick comes out clean.',
                'Let cool in the pan for 5 minutes, then transfer to a wire rack.',
                'Serve warm or at room temperature.'
            ],
            tip: 'Don\'t overmix the batter for fluffy muffins. Toss blueberries in flour to prevent sinking.'
        },
        {
            name: 'Chocolate Brownies',
            ingredients: ['Flour','Sugar','Eggs','Butter','Chocolate','Cocoa Powder','Vanilla'],
            fullIngredients: ['1 cup Flour','1.5 cups Sugar','3 Eggs','0.5 cup Butter','200g Chocolate','0.25 cup Cocoa Powder','1 tsp Vanilla'],
            servings: '16',
            prep: '40 min',
            difficulty: 'Easy',
            calories: '420',
            imageUrl: 'Brownies.jpg',
            instructions: [
                'Preheat oven to 175°C (350°F). Grease a 9x13 inch baking pan.',
                'Melt chocolate and butter together in a heatproof bowl over simmering water.',
                'Remove from heat and stir in sugar until well combined.',
                'Add eggs one at a time, beating well after each addition. Stir in vanilla.',
                'Sift in flour and cocoa powder, folding gently until just combined.',
                'Pour the batter into the prepared pan and smooth the top.',
                'Bake for 28-32 minutes, or until a toothpick inserted comes out with moist crumbs.',
                'Let cool completely before cutting into squares.',
                'Serve with a dusting of powdered sugar or a scoop of ice cream.'
            ],
            tip: 'Underbake slightly for fudgy brownies. For cakey brownies, bake a few minutes longer.'
        },
        {
            name: 'Apple Pie',
            ingredients: ['Flour','Sugar','Butter','Cinnamon','Milk','Vanilla','Apples'],
            fullIngredients: ['2.5 cups Flour','0.75 cup Sugar','0.5 cup Butter','2 tsp Cinnamon','0.25 cup Milk','1 tsp Vanilla','6 Apples'],
            servings: '8',
            prep: '70 min',
            difficulty: 'Medium',
            calories: '380',
            imageUrl: 'pie.jpg',
            instructions: [
                'Preheat oven to 190°C (375°F).',
                'For the crust: mix flour, cold butter, and a pinch of salt until crumbly. Add cold water gradually and form a dough.',
                'Divide the dough in half and roll out one half for the bottom crust. Place in a 9-inch pie dish.',
                'Peel, core, and slice the apples. Mix with sugar, cinnamon, and a little flour.',
                'Fill the pie crust with the apple mixture.',
                'Roll out the second half of the dough and place on top. Crimp the edges and cut slits for steam.',
                'Brush the top with milk and sprinkle with sugar.',
                'Bake for 45-50 minutes, or until the crust is golden and the filling is bubbly.',
                'Let cool on a wire rack for at least 30 minutes before serving.',
                'Serve warm with vanilla ice cream.'
            ],
            tip: 'Use a mix of sweet and tart apples for the best flavour. Let the pie cool slightly before slicing.'
        },
        {
            name: 'Pancakes',
            ingredients: ['Flour','Sugar','Eggs','Milk','Butter','Baking Powder','Vanilla'],
            fullIngredients: ['2 cups Flour','2 tbsp Sugar','2 Eggs','1.5 cups Milk','0.25 cup Butter','2 tsp Baking Powder','1 tsp Vanilla'],
            servings: '12',
            prep: '20 min',
            difficulty: 'Easy',
            calories: '220',
            imageUrl: 'pancake.jpg',
            instructions: [
                'In a large bowl, sift together flour, baking powder, and sugar.',
                'In another bowl, whisk together eggs, milk, melted butter, and vanilla.',
                'Pour the wet ingredients into the dry ingredients and whisk until just combined (batter should be lumpy).',
                'Let the batter rest for 5-10 minutes while you heat a griddle or non-stick pan.',
                'Lightly grease the pan with butter or oil.',
                'Pour 1/4 cup of batter onto the pan for each pancake.',
                'Cook until bubbles form on the surface, then flip and cook until golden brown.',
                'Keep warm in a low oven while cooking the remaining pancakes.',
                'Serve with maple syrup, fresh fruit, or whipped cream.'
            ],
            tip: 'Let the batter rest for 10 minutes for fluffier pancakes. Don\'t overmix the batter.'
        },
        {
            name: 'Coconut Cake',
            ingredients: ['Flour','Sugar','Eggs','Milk','Butter','Vanilla','Baking Powder','Coconut'],
            fullIngredients: ['2 cups Flour','1.5 cups Sugar','3 Eggs','0.75 cup Milk','0.5 cup Butter','1 tsp Vanilla','2 tsp Baking Powder','1 cup Coconut Flakes'],
            servings: '10',
            prep: '50 min',
            difficulty: 'Medium',
            calories: '390',
            imageUrl: 'cocnat.jpg',
            instructions: [
                'Preheat oven to 175°C (350°F). Grease and flour a 9-inch round cake pan.',
                'In a large bowl, cream butter and sugar until light and fluffy.',
                'Add eggs one at a time, beating well after each addition. Stir in vanilla.',
                'In a separate bowl, sift together flour and baking powder.',
                'Add the dry ingredients to the wet mixture alternately with milk.',
                'Fold in the coconut flakes.',
                'Pour the batter into the prepared pan and smooth the top.',
                'Bake for 40-45 minutes, or until a toothpick inserted in the center comes out clean.',
                'Let cool in the pan for 15 minutes, then transfer to a wire rack.',
                'Frost with cream cheese frosting and sprinkle with extra coconut.'
            ],
            tip: 'Toast the coconut flakes before adding for extra flavour. Use sweetened or unsweetened coconut as preferred.'
        },
        {
            name: 'Cinnamon Rolls',
            ingredients: ['Flour','Sugar','Eggs','Milk','Butter','Cinnamon','Vanilla'],
            fullIngredients: ['3.5 cups Flour','0.5 cup Sugar','2 Eggs','1 cup Milk','0.5 cup Butter','2 tbsp Cinnamon','1 tsp Vanilla','0.25 cup Brown Sugar'],
            servings: '12',
            prep: '90 min',
            difficulty: 'Medium',
            calories: '410',
            imageUrl: 'roll.jpg',
            instructions: [
                'In a large bowl, mix flour, sugar, and salt. Add warm milk, eggs, and melted butter.',
                'Knead the dough until smooth and elastic, about 8-10 minutes. Let rise for 1 hour.',
                'Punch down the dough and roll out into a rectangle.',
                'Spread softened butter over the dough and sprinkle with cinnamon and brown sugar.',
                'Roll up the dough tightly and cut into 12 even slices.',
                'Place the rolls in a greased baking dish and let rise for 30 minutes.',
                'Preheat oven to 180°C (350°F).',
                'Bake for 20-25 minutes, or until golden brown.',
                'Make cream cheese frosting: mix cream cheese, powdered sugar, and vanilla.',
                'Spread the frosting over the warm rolls and serve.'
            ],
            tip: 'For extra gooey rolls, add cream or melted butter to the pan before baking.'
        },
        {
            name: 'Fruit Tart',
            ingredients: ['Flour','Sugar','Eggs','Butter','Milk','Vanilla','Strawberries'],
            fullIngredients: ['1.5 cups Flour','0.5 cup Sugar','2 Eggs','0.5 cup Butter','0.5 cup Milk','1 tsp Vanilla','Fresh Fruits'],
            servings: '8',
            prep: '55 min',
            difficulty: 'Medium',
            calories: '320',
            imageUrl: 'fruit tart.jpg',
            instructions: [
                'Preheat oven to 180°C (350°F). Grease a tart pan with removable bottom.',
                'For the crust: mix flour, cold butter, and sugar until crumbly. Add an egg yolk and cold water to form a dough.',
                'Press the dough into the tart pan and chill for 30 minutes.',
                'Bake the crust blind (with baking weights) for 15 minutes, then remove weights and bake for 5 more minutes.',
                'For the pastry cream: whisk egg yolks, sugar, and cornstarch. Heat milk and vanilla, then pour into the egg mixture.',
                'Cook the cream until thickened, then let cool completely.',
                'Spread the pastry cream into the cooled tart crust.',
                'Arrange fresh fruits on top in a decorative pattern.',
                'Brush with apricot glaze or honey.',
                'Serve chilled.'
            ],
            tip: 'Use seasonal fruits for the best flavour. The glaze keeps the fruit fresh and shiny.'
        },
        {
            name: 'Bread Pudding',
            ingredients: ['Bread','Eggs','Milk','Sugar','Vanilla','Cinnamon'],
            fullIngredients: ['6 slices Bread','3 Eggs','2 cups Milk','0.75 cup Sugar','1 tsp Vanilla','1 tsp Cinnamon','0.5 cup Raisins (optional)'],
            servings: '8',
            prep: '40 min',
            difficulty: 'Easy',
            calories: '280',
            imageUrl: 'bread thingd.jpg',
            instructions: [
                'Preheat oven to 175°C (350°F). Grease a 9x13 inch baking dish.',
                'Tear the bread into pieces and place in the baking dish.',
                'In a large bowl, whisk together eggs, milk, sugar, vanilla, and cinnamon.',
                'Pour the custard mixture over the bread pieces. Press down to ensure all bread is soaked.',
                'Sprinkle with raisins if using.',
                'Let stand for 15-20 minutes to allow the bread to absorb the custard.',
                'Bake for 30-35 minutes, or until the top is golden and the custard is set.',
                'Let cool for 10 minutes before serving.',
                'Serve warm with vanilla ice cream or caramel sauce.'
            ],
            tip: 'Use stale bread for the best texture. Day-old brioche or croissants work wonderfully.'
        },
        {
            name: 'Chocolate Mousse',
            ingredients: ['Eggs','Sugar','Chocolate','Butter','Vanilla'],
            fullIngredients: ['4 Eggs','0.5 cup Sugar','200g Chocolate','0.25 cup Butter','1 tsp Vanilla'],
            servings: '6',
            prep: '30 min',
            difficulty: 'Medium',
            calories: '300',
            imageUrl: 'mose.jpg',
            instructions: [
                'Separate the egg whites from the yolks.',
                'Melt chocolate and butter together in a heatproof bowl over simmering water.',
                'Remove from heat and whisk in the egg yolks one at a time. Stir in vanilla.',
                'In a separate bowl, beat egg whites until soft peaks form. Gradually add sugar and beat until stiff.',
                'Gently fold the beaten egg whites into the chocolate mixture using a spatula.',
                'Spoon the mousse into serving glasses or bowls.',
                'Refrigerate for at least 2 hours or until set.',
                'Garnish with whipped cream and chocolate shavings before serving.'
            ],
            tip: 'Use high-quality chocolate for the best flavour. Fold the egg whites gently to keep the mousse airy.'
        },
        {
            name: 'Oatmeal Cookies',
            ingredients: ['Flour','Sugar','Eggs','Butter','Honey','Cinnamon','Vanilla','Oats'],
            fullIngredients: ['1.5 cups Flour','0.75 cup Sugar','1 Egg','0.5 cup Butter','2 tbsp Honey','1 tsp Cinnamon','1 tsp Vanilla','2 cups Oats'],
            servings: '24',
            prep: '25 min',
            difficulty: 'Easy',
            calories: '180',
            imageUrl: 'cookie.jpg',
            instructions: [
                'Preheat oven to 175°C (350°F). Line a baking sheet with parchment paper.',
                'In a large bowl, cream butter and sugar until light and fluffy.',
                'Add egg and vanilla, beating well. Stir in honey.',
                'In a separate bowl, mix together flour, oats, cinnamon, and baking soda.',
                'Gradually add the dry ingredients to the wet mixture until well combined.',
                'Drop rounded tablespoons of dough onto the prepared baking sheet.',
                'Bake for 10-12 minutes, or until the edges are golden.',
                'Let cool on the baking sheet for 5 minutes, then transfer to a wire rack.',
                'Store in an airtight container.'
            ],
            tip: 'Add chocolate chips or dried fruit for extra flavour. Don\'t overbake for chewy cookies.'
        },
        {
            name: 'Pound Cake',
            ingredients: ['Flour','Sugar','Eggs','Butter','Milk','Vanilla','Baking Powder'],
            fullIngredients: ['2 cups Flour','1.5 cups Sugar','4 Eggs','1 cup Butter','0.5 cup Milk','2 tsp Vanilla','2 tsp Baking Powder'],
            servings: '12',
            prep: '60 min',
            difficulty: 'Easy',
            calories: '350',
            imageUrl: 'pound.jpg',
            instructions: [
                'Preheat oven to 165°C (325°F). Grease and flour a tube pan or bundt pan.',
                'In a large bowl, cream butter and sugar until light and fluffy.',
                'Add eggs one at a time, beating well after each addition. Stir in vanilla.',
                'In a separate bowl, sift together flour and baking powder.',
                'Add the dry ingredients to the wet mixture alternately with milk.',
                'Pour the batter into the prepared pan and smooth the top.',
                'Bake for 55-60 minutes, or until a toothpick inserted in the center comes out clean.',
                'Let cool in the pan for 15 minutes, then invert onto a wire rack.',
                'Serve plain or with fresh fruit and whipped cream.'
            ],
            tip: 'Bake in a tube pan for even baking. The cake improves with age and stays moist for days.'
        },
        {
            name: 'Rice Pudding',
            ingredients: ['Rice','Milk','Sugar','Eggs','Vanilla','Cinnamon'],
            fullIngredients: ['1 cup Rice','4 cups Milk','0.5 cup Sugar','2 Eggs','1 tsp Vanilla','1 tsp Cinnamon','0.5 cup Raisins (optional)'],
            servings: '8',
            prep: '45 min',
            difficulty: 'Easy',
            calories: '220',
            imageUrl: 'rice pudding.jpg',
            instructions: [
                'In a large saucepan, combine rice and milk. Cook over medium heat, stirring frequently.',
                'When the rice is tender and the mixture has thickened (about 20-25 minutes), reduce heat to low.',
                'In a small bowl, whisk together eggs, sugar, and vanilla.',
                'Gradually add the egg mixture to the rice, stirring constantly.',
                'Cook for 5-7 minutes more until the pudding is thickened.',
                'Stir in cinnamon and raisins if using.',
                'Remove from heat and let cool slightly.',
                'Serve warm or chilled with a sprinkle of cinnamon on top.'
            ],
            tip: 'Use medium-grain rice for a creamy texture. Stir frequently to prevent sticking.'
        },
        {
            name: 'Lemon Bars',
            ingredients: ['Flour','Sugar','Eggs','Butter','Vanilla','Milk','Lemon'],
            fullIngredients: ['1.5 cups Flour','1 cup Sugar','3 Eggs','0.5 cup Butter','1 tsp Vanilla','0.5 cup Milk','1 Lemon (zest & juice)'],
            servings: '16',
            prep: '50 min',
            difficulty: 'Medium',
            calories: '260',
            imageUrl: 'lemon cake.jpg',
            instructions: [
                'Preheat oven to 175°C (350°F). Grease a 9x13 inch baking pan.',
                'For the crust: mix flour, butter, and powdered sugar until crumbly. Press into the bottom of the pan.',
                'Bake for 15-20 minutes until lightly golden.',
                'For the filling: whisk together eggs, sugar, flour, lemon zest, and lemon juice.',
                'Pour the filling over the baked crust.',
                'Bake for 20-25 minutes, or until the filling is set.',
                'Let cool completely in the pan on a wire rack.',
                'Dust with powdered sugar before cutting into bars.',
                'Serve chilled or at room temperature.'
            ],
            tip: 'Dust with powdered sugar just before serving. The bars can be stored in the refrigerator.'
        }
    ];

    // ========== INGREDIENTS ==========
    const INGREDIENTS = [
        { name: 'Flour', img: 'flour.png' },
        { name: 'Sugar', img: 'suger.png' },
        { name: 'Eggs', img: 'egg.png' },
        { name: 'Milk', img: 'milk.png' },
        { name: 'Butter', img: 'butter.png' },
        { name: 'Vanilla', img: 'vanil.png' },
        { name: 'Cocoa Powder', img: 'choclake owder.png' },
        { name: 'Chocolate', img: 'chocklet.png' },
        { name: 'Honey', img: 'honey.png' },
        { name: 'Banana', img: 'banan.png' },
        { name: 'Strawberries', img: 'strewbier.png' },
        { name: 'Cream Cheese', img: 'chess.png' },
        { name: 'Cinnamon', img: 'cinomment.png' },
        { name: 'Baking Powder', img: 'bakeing powder.png' },
        { name: 'Blueberries', img: 'buleberry.png' },
        { name: 'Apples', img: 'apple.png' },
        { name: 'Lemon', img: 'lemon.png' },
        { name: 'Carrots', img: 'carrot.png' },
        { name: 'Oats', img: 'oatmil.png' },
        { name: 'Coconut', img: 'coconat.png' },
        { name: 'Rice', img: 'rice.png' },
        { name: 'Bread', img: 'bread.png' }
    ];

    // ========== STATE ==========
    let selected = new Set();
    let currentRecipes = [];
    let allRecipes = [...RECIPES];
    let favorites = new Set();

    function loadFavorites() {
        const saved = localStorage.getItem('bakeFavorites');
        if (saved) {
            try { favorites = new Set(JSON.parse(saved)); } catch(e) { favorites = new Set(); }
        }
    }
    function saveFavorites() {
        localStorage.setItem('bakeFavorites', JSON.stringify(Array.from(favorites)));
        updateFavCount();
    }
    function updateFavCount() {
        document.getElementById('favCount').textContent = favorites.size;
    }

    // DOM
    const mainContent = document.getElementById('mainContent');
    const favoritesPage = document.getElementById('favoritesPage');
    const favoritesGrid = document.getElementById('favoritesGrid');
    const emptyFav = document.getElementById('emptyFav');
    const grid = document.getElementById('ingredientGrid');
    const resultsGrid = document.getElementById('resultsGrid');
    const emptyState = document.getElementById('emptyState');
    const findBtn = document.getElementById('findRecipesBtn');
    const heroBtn = document.getElementById('heroStartBtn');
    const addMoreBtn = document.getElementById('addMoreBtn');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const homeBtn = document.getElementById('homeBtn');
    const homeLink = document.getElementById('homeLink');
    const favoritesLink = document.getElementById('favoritesLink');
    const footerHome = document.getElementById('footerHome');
    const footerFavorites = document.getElementById('footerFavorites');
    const startBakingNav = document.getElementById('startBakingNav');

    const modalOverlay = document.getElementById('recipeModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalTime = document.getElementById('modalTime');
    const modalCalories = document.getElementById('modalCalories');
    const modalDifficulty = document.getElementById('modalDifficulty');
    const modalServings = document.getElementById('modalServings');
    const modalIngredients = document.getElementById('modalIngredients');
    const modalInstructions = document.getElementById('modalInstructions');
    const modalTip = document.getElementById('modalTip');

    // ========== FUNCTIONS ==========
    function renderIngredients() {
        grid.innerHTML = '';
        INGREDIENTS.forEach(ing => {
            const card = document.createElement('div');
            card.className = 'ingredient-card';
            if (selected.has(ing.name)) card.classList.add('active');

            const imgSrc = ing.img && ing.img.trim() !== '' ? ing.img : 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'80\' height=\'80\' viewBox=\'0 0 80 80\'%3E%3Crect width=\'80\' height=\'80\' fill=\'%23f0e3d4\'/%3E%3Ctext x=\'50%25\' y=\'55%25\' text-anchor=\'middle\' font-size=\'30\' fill=\'%237a5f50\' font-family=\'Quicksand\'%3E🍰%3C/text%3E%3C/svg%3E';

            card.innerHTML = `
                <img src="${imgSrc}" alt="${ing.name}" loading="lazy" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'80\' height=\'80\' viewBox=\'0 0 80 80\'%3E%3Crect width=\'80\' height=\'80\' fill=\'%23f0e3d4\'/%3E%3Ctext x=\'50%25\' y=\'55%25\' text-anchor=\'middle\' font-size=\'30\' fill=\'%237a5f50\' font-family=\'Quicksand\'%3E🍰%3C/text%3E%3C/svg%3E'">
                <span>${ing.name}</span>
            `;
            card.dataset.name = ing.name;
            card.addEventListener('click', () => {
                const name = card.dataset.name;
                if (selected.has(name)) selected.delete(name);
                else selected.add(name);
                renderIngredients();
            });
            grid.appendChild(card);
        });
    }

    function matchRecipes(recipes) {
        const sel = Array.from(selected);
        if (sel.length === 0) {
            return recipes.map(r => ({ ...r, match: 100 }));
        } else {
            return recipes.map(recipe => {
                const total = recipe.ingredients.length;
                const matched = recipe.ingredients.filter(ing => {
                    return sel.some(s => ing.toLowerCase().includes(s.toLowerCase()));
                }).length;
                const match = Math.round((matched / total) * 100);
                return { ...recipe, match };
            }).sort((a,b) => b.match - a.match);
        }
    }

    function findRecipes() {
        currentRecipes = matchRecipes(allRecipes);
        renderResults(currentRecipes);
        showMain();
    }

    function renderResults(recipes) {
        resultsGrid.innerHTML = '';
        const filtered = recipes.filter(r => r.match > 0);
        if (filtered.length === 0) {
            emptyState.classList.remove('hidden');
            return;
        }
        emptyState.classList.add('hidden');

        filtered.forEach((recipe, idx) => {
            const missing = recipe.ingredients.filter(ing => {
                return !selected.has(ing);
            });
            const missingText = missing.length ? missing.join(', ') : 'All set!';

            const card = document.createElement('div');
            card.className = 'recipe-card fade-in';
            card.style.animationDelay = `${idx * 0.05}s`;
            card.innerHTML = `
                <div class="recipe-img">
                    <img src="${recipe.imageUrl}" alt="${recipe.name}" loading="lazy" onerror="this.style.display='none'">
                    <span class="match-badge">${recipe.match}% Match</span>
                </div>
                <div class="recipe-body">
                    <h4>${recipe.name}</h4>
                    <div class="recipe-meta">
                        <span><i class="far fa-clock"></i> ${recipe.prep}</span>
                        <span><i class="fas fa-signal"></i> ${recipe.difficulty}</span>
                        <span><i class="fas fa-utensils"></i> ${recipe.servings} servings</span>
                    </div>
                    <div class="missing-tag"><i class="fas fa-utensils"></i> Missing: ${missingText}</div>
                    <div class="recipe-footer">
                        <button class="btn-view view-recipe" data-idx="${idx}">View Recipe</button>
                        <button class="heart ${favorites.has(recipe.name) ? 'liked' : ''}" data-name="${recipe.name}">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            `;
            resultsGrid.appendChild(card);

            card.querySelector('.view-recipe').addEventListener('click', (e) => {
                const index = e.currentTarget.dataset.idx;
                openModal(filtered[index]);
            });

            card.querySelector('.heart').addEventListener('click', (e) => {
                e.stopPropagation();
                const name = e.currentTarget.dataset.name;
                toggleFavorite(name);
                renderResults(currentRecipes);
            });
        });
    }

    function loadMoreRecipes() {
        // فقط برای نمایش پیام
        loadMoreBtn.textContent = ' All recipes loaded!';
        loadMoreBtn.disabled = true;
        loadMoreBtn.style.opacity = '0.7';
        loadMoreBtn.style.cursor = 'default';
    }

    function toggleFavorite(name) {
        if (favorites.has(name)) favorites.delete(name);
        else favorites.add(name);
        saveFavorites();
        renderFavorites();
        renderResults(currentRecipes);
    }

    function renderFavorites() {
        favoritesGrid.innerHTML = '';
        const favRecipes = allRecipes.filter(r => favorites.has(r.name));
        if (favRecipes.length === 0) {
            emptyFav.style.display = 'block';
            favoritesGrid.style.display = 'none';
            return;
        }
        emptyFav.style.display = 'none';
        favoritesGrid.style.display = 'grid';

        favRecipes.forEach((recipe, idx) => {
            const card = document.createElement('div');
            card.className = 'recipe-card fade-in';
            card.style.animationDelay = `${idx * 0.05}s`;
            card.innerHTML = `
                <div class="recipe-img">
                    <img src="${recipe.imageUrl}" alt="${recipe.name}" loading="lazy" onerror="this.style.display='none'">
                    <span class="match-badge"> Favorite</span>
                </div>
                <div class="recipe-body">
                    <h4>${recipe.name}</h4>
                    <div class="recipe-meta">
                        <span><i class="far fa-clock"></i> ${recipe.prep}</span>
                        <span><i class="fas fa-signal"></i> ${recipe.difficulty}</span>
                        <span><i class="fas fa-utensils"></i> ${recipe.servings} servings</span>
                    </div>
                    <div class="recipe-footer">
                        <button class="btn-view view-recipe-fav" data-name="${recipe.name}">View Recipe</button>
                        <button class="heart liked" data-name="${recipe.name}">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            `;
            favoritesGrid.appendChild(card);

            card.querySelector('.view-recipe-fav').addEventListener('click', () => {
                const fullRecipe = allRecipes.find(r => r.name === recipe.name);
                if (fullRecipe) openModal(fullRecipe);
            });

            card.querySelector('.heart').addEventListener('click', (e) => {
                e.stopPropagation();
                const name = e.currentTarget.dataset.name;
                toggleFavorite(name);
                renderFavorites();
            });
        });
    }

    function showMain() {
        mainContent.classList.remove('hidden');
        favoritesPage.classList.remove('active');
    }
    function showFavorites() {
        mainContent.classList.add('hidden');
        favoritesPage.classList.add('active');
        renderFavorites();
    }

    function openModal(recipe) {
        modalTitle.textContent = recipe.name;
        modalImage.src = recipe.imageUrl;
        modalImage.style.display = 'block';
        modalTime.textContent = ` ${recipe.prep}`;
        modalCalories.textContent = ` ${recipe.calories} kcal`;
        modalDifficulty.textContent = ` ${recipe.difficulty}`;
        modalServings.textContent = ` ${recipe.servings} servings`;

        modalIngredients.innerHTML = recipe.fullIngredients.map(i => `<li>${i}</li>`).join('');
        modalInstructions.innerHTML = recipe.instructions.map((step, idx) => `<li>${step}</li>`).join('');
        modalTip.innerHTML = ` ${recipe.tip || 'Enjoy your bake!'}`;

        modalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    // ========== EVENTS ==========
    findBtn.addEventListener('click', findRecipes);
    loadMoreBtn.addEventListener('click', loadMoreRecipes);

    heroBtn.addEventListener('click', () => {
        document.querySelector('.selector-section').scrollIntoView({ behavior: 'smooth' });
    });
    addMoreBtn.addEventListener('click', () => {
        document.querySelector('.selector-section').scrollIntoView({ behavior: 'smooth' });
    });
    startBakingNav.addEventListener('click', () => {
        document.querySelector('.selector-section').scrollIntoView({ behavior: 'smooth' });
    });

    homeBtn.addEventListener('click', showMain);
    homeLink.addEventListener('click', showMain);
    footerHome.addEventListener('click', showMain);
    favoritesLink.addEventListener('click', showFavorites);
    footerFavorites.addEventListener('click', showFavorites);

    closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('open')) closeModal();
    });

    // ========== INIT ==========
    loadFavorites();
    updateFavCount();
    renderIngredients();
    currentRecipes = matchRecipes(allRecipes);
    renderResults(currentRecipes);
    renderFavorites();
})();
