import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { PenSquare } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

import { FormPostValues, formPostSchema } from '@/lib/validation';
import { IPayload } from '@/types';

import { Posts } from '@/types';
import { updatePost } from '@/services/api';

interface EditPostProps {
  data: Posts;
}

const EditPost = (props: EditPostProps) => {
  const { data } = props;

  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);

  const form = useForm<IPayload>({
    resolver: zodResolver(formPostSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    setValue,
  } = form;

  const updatePostMutation = useMutation({
    mutationFn: (payload: IPayload) => updatePost(payload),

    onSuccess: async (data: any) => {
      toast.success(`Success update post ${data.title}.`);
      await queryClient.invalidateQueries({ queryKey: ['posts'] });
      setOpen(false);
    },

    onSettled: async (_, error: any) => {
      toast.error(error.response.data.msg);
    },
  });

  const onSubmit: SubmitHandler<FormPostValues> = (data) => {
    updatePostMutation.mutate(data);
  };

  useEffect(() => {
    if (data) {
      setValue('id', data.id);
      setValue('title', data.title);
      setValue('body', data.body);
      setValue('userId', data.userId);
    }
  }, [open, data]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="iconcm"
          variant="destructive"
          className="bg-yellow-400 hover:bg-yellow-600"
        >
          <PenSquare className="w-3 h-3" />
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[425px]"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>Edit Post</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
            quia.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input disabled={isSubmitting} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Body</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="Lorem ipsum dolor sit amet."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="userId"
              render={({ field: { value, ...fieldValues } }) => (
                <FormItem>
                  <FormLabel>User ID</FormLabel>
                  <FormControl>
                    <Input
                      value={value}
                      disabled={isSubmitting}
                      onChange={(e) => {
                        const value = e.target.value;
                        fieldValues.onChange(Number(value));
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Save Changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditPost;
