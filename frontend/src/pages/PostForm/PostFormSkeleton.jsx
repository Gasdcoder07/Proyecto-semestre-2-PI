const PostFormSkeleton = () => {
  return (
    <div className="py-12 space-y-4 flex flex-col justify-center">
        <div className="rounded-xl bg-white/10 w-1/2 h-12 mx-auto"/>

        <div className="max-w-2xl space-y-6">
            <div className="flex justify-end">
                <div className="rounded-xl bg-white/10 w-1/3 h-12"/>
            </div>

            <div className="rounded-xl bg-white/10 w-full h-12 mx-auto"/>
            <div className="rounded-xl bg-white/10 w-full h-48 mx-auto"/>
        </div>
    </div>
  );
};

export default PostFormSkeleton;
