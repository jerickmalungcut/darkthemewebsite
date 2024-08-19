import { featuresSection } from "@/utilities/data";
import Feature from "./Feature";

const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Everything you need
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          {featuresSection.map(({ title, description, image }) => (
            <Feature
              title={title}
              description={description}
              image={image}
              key={title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Features;
