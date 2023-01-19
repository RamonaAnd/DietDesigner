import styles from './diabetis-recipe.module.css';

function Diabetis() {
    return (
        <main className={styles.main}>
            <section>
                <h2 className={styles.title}>
                    Diabetes diet: Create your healthy-eating plan
                </h2>
                <h4>
                    Your diabetes diet is simply a healthy-eating plan that will help you control your blood sugar.
                    Here's help getting started, from meal planning to counting carbohydrates.
                </h4>
                <p>
                    A diabetes diet simply means eating the healthiest foods in moderate amounts and sticking to regular mealtimes.
                </p>
                <p>
                    A diabetes diet is a healthy-eating plan that's naturally rich in nutrients and low in fat and calories.
                    Key elements are fruits, vegetables and whole grains. In fact, a diabetes diet is the best eating plan for most everyone.
                </p>
            </section>
            <section>
                <h2>
                    Why do you need to develop a healthy-eating plan?
                </h2>
                <p>
                    If you have diabetes or prediabetes, your doctor will likely recommend that you see a dietitian to help you develop a
                    healthy-eating plan. The plan helps you control your blood sugar (glucose), manage your weight and control heart disease
                    risk factors, such as high blood pressure and high blood fats.
                </p>
                <p>
                    When you eat extra calories and fat, your body creates an undesirable rise in blood glucose. If blood glucose isn't
                    kept in check, it can lead to serious problems, such as a high blood glucose level (hyperglycemia) that, if persistent,
                    may lead to long-term complications, such as nerve, kidney and heart damage.
                </p>
                <p>
                    You can help keep your blood glucose level in a safe range by making healthy food choices and tracking your eating habits.
                </p>
                <p>
                    For most people with type 2 diabetes, weight loss also can make it easier to control blood glucose and offers a host of other
                    health benefits. If you need to lose weight, a diabetes diet provides a well-organized, nutritious way to reach your goal safely.
                </p>
            </section>
        </main>
    )
}

export default Diabetis;