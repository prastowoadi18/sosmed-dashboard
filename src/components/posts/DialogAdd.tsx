import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CirclePlus } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

import { IPayload } from '@/types';
import { FormPostValues, formPostSchema } from '@/lib/validation';
import { addPost } from '@/services/api';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';

const AddPost = () => {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);

  const form = useForm<IPayload>({
    resolver: zodResolver(formPostSchema),
    defaultValues: {
      body: '',
      title: '',
      userId: 0,
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = form;

  const addPostMutation = useMutation({
    mutationFn: (data: IPayload) => addPost(data),

    onSuccess: async (data: any) => {
      toast.success(`Success add post ${data.title}.`);
      await queryClient.invalidateQueries({ queryKey: ['posts'] });
      setOpen(false);
    },

    onSettled: async (_, error: any) => {
      toast.error(error.response.data.msg);
    },
  });

  const onSubmit: SubmitHandler<FormPostValues> = (data) => {
    addPostMutation.mutate(data);
  };

  useEffect(() => {
    reset({
      body: '',
      title: '',
      userId: 0,
    });
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="icon" variant="secondary" className="rounded-full">
          <CirclePlus className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Post</DialogTitle>
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
                    <Input
                      disabled={isSubmitting}
                      placeholder="Helo"
                      {...field}
                    />
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
                      {...fieldValues}
                      disabled={isSubmitting}
                      placeholder="23"
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
              <Button type="submit">Add Post</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPost;
