import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

import { Button } from '../ui/button';
import { deletePost } from '@/services/api';
import { Trash } from 'lucide-react';

interface DeletePostProps {
  id: number;
}
const DeletePost = (props: DeletePostProps) => {
  const { id } = props;

  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);

  const deletePostMutation = useMutation({
    mutationFn: (id: number) => deletePost(id),

    onSuccess: async () => {
      toast.success(`Success delete post.`);
      await queryClient.invalidateQueries({ queryKey: ['posts'] });
      setOpen(false);
    },

    onSettled: async (_, error: any) => {
      toast.error(error.response.data.msg);
    },
  });

  const onSubmit = () => {
    deletePostMutation.mutate(id);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="iconcm" variant="destructive">
          <Trash className="w-3 h-3" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Post</DialogTitle>
          <DialogDescription>
            Are you sure to delete this post?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mt-5">
          <Button onClick={onSubmit}>Delete post</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeletePost;
